import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "./assets/scss/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
