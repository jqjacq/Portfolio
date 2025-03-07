import "./App.css";
import "../src/styles/images.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import "animate.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
