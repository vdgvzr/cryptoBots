import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
