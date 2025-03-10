import "./App.css";
import "../src/styles/images.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import useIconEffect from "./hooks/useIconEffect";

function App() {
  useIconEffect();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
