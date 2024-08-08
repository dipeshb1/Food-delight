import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import ErrorElement from "./Ui/ErrorElement";
import Home, { loader as homeLoaderAPI } from "./Ui/Home";
import Restaurant, {
  loader as restaurantLoaderAPI,
} from "./features/restaurants/Restaurant";
import AddorEditRestaurant from "./features/restaurants/AddorEditRestaurant";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoaderAPI,
          errorElement: <ErrorElement />,
        },
        {
          path: "/restaurant/:id",
          element: <Restaurant />,
          loader: restaurantLoaderAPI,
          errorElement: <ErrorElement />,
        },
        {
          path: "/new",
          element: <AddorEditRestaurant />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
