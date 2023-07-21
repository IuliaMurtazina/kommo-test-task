import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import About from "./pages/About";
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import { useAppSelector } from "./store/hooks";
import { createPortal } from "react-dom";
import Modal from "./components/modal/Modal";
import NotFound from "./components/NotFound/NotFound";

const App: React.FC = () => {
  const { isModalOpen } = useAppSelector((state) => state.ui);

  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "pages",
          element: <Pages />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      {isModalOpen &&
        createPortal(<Modal />, document.getElementById("modal-root")!)}
    </>
  );
};

export default App;
