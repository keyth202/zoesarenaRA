import useLocalStorage from "hooks/useLocalStorage";
import { createContext } from "react";
import { THEMES } from "../constants";
const initialSettings = {
  activeLayout: "layout3",
  direction: "ltr",
  theme: THEMES.LIGHT,
  responsiveFontSizes: true
};
export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: arg => {}
}); // component props type

const SettingsProvider = ({
  children
}) => {
  const {
    data: settings,
    storeData: setStoreSettings
  } = useLocalStorage("settings", initialSettings);

  const saveSettings = updateSettings => {
    setStoreSettings(updateSettings);
  };

  return <SettingsContext.Provider value={{
    settings,
    saveSettings
  }}>
      {children}
    </SettingsContext.Provider>;
};

export default SettingsProvider;