import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { deleteRestaurant } from "../services/apiRestaurants";
import Button from "./Button";
import toast from "react-hot-toast";

function Modal({ id, isDeleted }) {
  const navigate = useNavigate();
  async function handleDelete() {
    const res = await deleteRestaurant(id);
    if (res.ok) {
      isDeleted(false);
      toast.success("Deleted Successfully");
      navigate("/");
    } else {
      toast.error("Couldn't delete the restaurant");
    }
  }
  async function handleCancel() {
    isDeleted(false);
  }
  return createPortal(
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4">Are you sure you want to delete?</div>
        <div className="flex justify-end space-x-2">
          <Button onClick={handleDelete} type="delete">
            Delete
          </Button>
          <Button type="submit" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
