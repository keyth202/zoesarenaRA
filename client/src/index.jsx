import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { JWTAuthProvider } from "contexts/JWTAuth";
import SettingsProvider from "contexts/settingsContext";
import App from "./App";
import "nprogress/nprogress.css";
import "react-quill/dist/quill.snow.css";
import "simplebar-react/dist/simplebar.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./__fakeData__";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SettingsProvider>
        <JWTAuthProvider>
          <App />
        </JWTAuthProvider>
      </SettingsProvider>
    </LocalizationProvider>
  </React.StrictMode>);