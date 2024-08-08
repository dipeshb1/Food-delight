import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <div className="relative grid h-screen grid-rows-[auto_1fr]">
        <Header />
        <div className="relative overflow-scroll">
          <main className="mx-auto max-w-3xl">
            {isLoading && <Loader data-testid="loader" />}
            <Outlet />
          </main>
        </div>
      </div>
      <Toaster
        data-testid="toaster"
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 18px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey",
          },
        }}
      />
    </>
  );
}

export default AppLayout;
