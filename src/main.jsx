import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContent from './content/AuthContent.jsx'
import TaskContent from './content/TaskContent.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <TaskContent>
        <App />      
        {/* rap component */}
      </TaskContent>
    </AuthContext>
  </StrictMode>
);
