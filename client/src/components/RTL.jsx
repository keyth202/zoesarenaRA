import { useEffect } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis"; // component props types

const RTL = ({
  children
}) => {
  const theme = useTheme();
  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);
  const cacheRTL = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: theme.direction === "rtl" ? [prefixer, rtlPlugin] : []
  });
  cacheRTL.compat = true;
  return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
};

export default RTL;