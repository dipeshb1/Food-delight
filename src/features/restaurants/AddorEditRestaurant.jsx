import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRestaurant, editRestaurant } from "../../services/apiRestaurants";
import Button from "../../Ui/Button";
import Modal from "../../Ui/Modal";
import toast from "react-hot-toast";
import LinkButton from "../../Ui/LinkButton";
import FormInput from "../../Ui/FormInput";

function AddorEditRestaurant({ restaurant, isEditing, setIsEditing }) {
  const navigate = useNavigate();
  const [isDelete, SetIsDelete] = useState(false);
  const [formData, setFormData] = useState({
    name: restaurant?.name || "",
    description: restaurant?.description || "",
    location: restaurant?.location || "",
    category: restaurant?.category || "",
    serves: restaurant?.serves || "",
    menu: restaurant?.menu || [{ name: "", price: "" }],
  });

  const [errors, setErrors] = useState({});

  //handle form inputs
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    const isNotMenu =
      name === "name" ||
      name === "category" ||
      name === "description" ||
      name === "serves" ||
      name === "location";

    if (isNotMenu) {
      updatedFormData[name] = value;
    } else {
      const [menuIndex, field] = name.split("-");
      updatedFormData.menu[menuIndex][field] = value;
    }

    setFormData(updatedFormData);
  };

  //Add a menu item
  const handleAddMenuItem = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      menu: [...formData.menu, { name: "", price: "" }],
    });
  };
  //Delete a menu item
  const handleRemoveMenuItem = (e, index) => {
    e.preventDefault();
    setFormData({
      ...formData,
      menu: formData.menu.filter((_, i) => i !== index),
    });
  };
  //Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Restaurant name is required.";
    if (!formData.description) errors.description = "Description is required.";
    if (!formData.location) errors.location = "Location is required.";
    if (!formData.serves) errors.serves = "Serves is required.";
    if (!formData.category) errors.category = "Category is required.";

    if (!formData.menu.length) {
      errors.menu = "Menu should contain atleast 1 item";
    } else {
      formData.menu.forEach((item, index) => {
        if (!item.name) errors[`${index}-name`] = "Menu item name is required.";
        if (!item.price || isNaN(item.price))
          errors[`${index}-price`] = "Menu item price must be a valid number.";
      });
    }

    return errors;
  };

  function handleDelete(e) {
    e.preventDefault();
    SetIsDelete(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (restaurant?.id) {
        const res = await editRestaurant(restaurant.id, formData);
        if (res?.ok) {
          toast.success("Restaurant details updated");
          setIsEditing(true);
        } else {
          toast.error("Error while updating the details");
        }
      } else {
        const res = await addRestaurant(formData);
        if (res?.ok) {
          toast.success("Restaurant added successfully");
          navigate("/");
        } else {
          toast.error("Error while adding the restaurant");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <LinkButton to={`/`}>&larr; back to home </LinkButton>
      {isDelete && <Modal id={restaurant.id} isDeleted={SetIsDelete} />}
      <div className="mb-4 px-3">
        <h2 className="py-4 text-xl">
          {isEditing ? "Restaurant Details" : "Add a Restaurant"}
        </h2>
        <form onSubmit={handleSubmit}>
          {restaurant?.id && (
            <input type="hidden" name="id" value={restaurant.id} />
          )}
          <FormInput
            field="name"
            labelName="Restaurant Name"
            handleChange={handleChange}
            value={formData.name}
            isEditing={isEditing}
            errors={errors.name}
          />
          <FormInput
            field="description"
            labelName="Description"
            handleChange={handleChange}
            value={formData.description}
            isEditing={isEditing}
            errors={errors.description}
          />
          <FormInput
            field="category"
            labelName="Category"
            handleChange={handleChange}
            value={formData.category}
            isEditing={isEditing}
            errors={errors.category}
          />
          <FormInput
            field="location"
            labelName="Location"
            handleChange={handleChange}
            value={formData.location}
            isEditing={isEditing}
            errors={errors.location}
          />
          <div className="mb-2 flex flex-col gap-1 text-sm sm:mb-4 sm:flex-row sm:items-center sm:gap-2 sm:text-base">
            <label className="sm:basis-40" htmlFor="serves">
              Serves
            </label>
            <div className="flex grow flex-col">
              <select
                name="serves"
                onChange={(e) => handleChange(e, "serves")}
                value={formData.serves}
                className="input grow"
                disabled={isEditing}
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="both">Both</option>
              </select>
              {errors.serves && (
                <p className="mt-0.5 rounded-sm bg-red-100 px-2 py-1 text-xs text-red-600 sm:text-sm">
                  {errors.serves}
                </p>
              )}
            </div>
          </div>
          <div className="border-2 px-4 py-2 text-sm sm:text-base">
            <h3>Menu</h3>
            {errors.menu && (
              <p className="mt-0.5 rounded-sm bg-red-100 px-2 py-1 text-xs text-red-600 sm:text-sm">
                {errors.menu}
              </p>
            )}
            {formData.menu?.map((item, index) => (
              <div key={index} className="flex justify-between gap-2 py-1">
                <div className="flex grow flex-col sm:flex-row">
                  <div className="mb-1 flex grow flex-col">
                    <input
                      type="text"
                      name={`${index}-name`}
                      value={item.name}
                      onChange={(e) => handleChange(e, index)}
                      disabled={isEditing}
                      className="input grow"
                      placeholder="Item name"
                    />
                    {errors[`${index}-name`] && (
                      <p className="mt-0.5 rounded-sm bg-red-100 px-2 py-1 text-xs text-red-600 sm:text-sm">
                        {errors[`${index}-name`]}
                      </p>
                    )}
                  </div>
                  <div className="mb-1 flex grow flex-col">
                    <input
                      type="number"
                      name={`${index}-price`}
                      value={item.price}
                      onChange={(e) => handleChange(e, index)}
                      disabled={isEditing}
                      className="input"
                      placeholder="Item price"
                    />
                    {errors[`${index}-price`] && (
                      <p className="mt-0.5 rounded-sm bg-red-100 px-2 py-1 text-xs text-red-600 sm:text-sm">
                        {errors[`${index}-price`]}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  disabled={isEditing}
                  onClick={(e) => handleRemoveMenuItem(e, index)}
                  type="cancel"
                >
                  ❌
                </Button>
              </div>
            ))}

            <Button
              disabled={isEditing}
              type="secondary"
              onClick={handleAddMenuItem}
            >
              Add +
            </Button>
          </div>
          <div className="flex flex-row gap-4">
            <Button disabled={isEditing} type="submit">
              Submit
            </Button>
            {isEditing && (
              <Button onClick={handleDelete} type="delete">
                Delete restaurant
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default AddorEditRestaurant;
