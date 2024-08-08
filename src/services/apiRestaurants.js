async function getRestaurants() {
  try {
    const res = await fetch("http://localhost:9000/restaurants");

    if (!res.ok) throw new Error("Error while fetching the restaurants");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch restaurants:", error);
    throw error;
  }
}

async function getRestaurant(id) {
  try {
    const res = await fetch(`http://localhost:9000/restaurants/${id}`);

    if (!res.ok) throw new Error("Error while fetching the restaurents");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch restaurant:", error);
    throw error;
  }
}

async function addRestaurant(newRestaurant) {
  try {
    const res = await fetch(`http://localhost:9000/restaurants/`, {
      method: "POST",
      body: JSON.stringify(newRestaurant),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Error while fetching the restaurents");
    return res;
  } catch (error) {
    console.error("Failed to add restaurant:", error);
    throw error;
  }
}

async function editRestaurant(id, updateObj) {
  console.log("Inside");
  try {
    const res = await fetch(`http://localhost:9000/restaurants/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Error while fetching the restaurents");
    return res;
  } catch (error) {
    console.error("Failed to edit restaurant:", error);
    throw error;
  }
}

async function deleteRestaurant(id) {
  try {
    const res = await fetch(`http://localhost:9000/restaurants/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error while fetching the restaurents");
    return res;
  } catch (error) {
    console.error("Failed to delete restaurant:", error);
    throw error;
  }
}
export {
  getRestaurants,
  getRestaurant,
  addRestaurant,
  editRestaurant,
  deleteRestaurant,
};
