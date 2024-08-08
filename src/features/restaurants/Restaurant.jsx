import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getRestaurant } from "../../services/apiRestaurants";

import AddorEditRestaurant from "./AddorEditRestaurant";
import Button from "../../Ui/Button";

function Restaurant() {
  const data = useLoaderData();
  const [isEditing, setIsEditing] = useState(true);
  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);
  }

  const handleFormSubmit = async () => {
    setIsEditing(true);
  };

  return (
    <div className="relative">
      <Button type="edit" onClick={handleEdit}>
        Edit
      </Button>
      <AddorEditRestaurant
        isEditing={isEditing}
        onFormSubmit={handleFormSubmit}
        restaurant={data}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}

export async function loader({ params }) {
  const data = await getRestaurant(params.id);
  return data;
}

export default Restaurant;
