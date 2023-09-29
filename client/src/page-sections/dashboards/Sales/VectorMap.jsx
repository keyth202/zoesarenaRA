import { useTheme } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import Map from "jsvectormap";
import "jsvectormap/dist/maps/world";
import { useEffect } from "react";

const VectorMap = () => {
  const theme = useTheme();
  const {
    width
  } = useWindowSize();
  useEffect(() => {
    const id = document.getElementById("map");
    if (id) id.innerHTML = "";
    const map = new Map({
      selector: "#map",
      zoomOnScroll: false,
      zoomButtons: false,
      markersSelectable: false,
      showTooltip: false,
      markers: [{
        name: "Bangladesh",
        coords: [23.777176, 90.399452],
        style: {
          fill: theme.palette.success.main
        },
        value: 70
      }, {
        name: "Russia",
        coords: [61.524, 105.3188],
        style: {
          fill: "#FF6B93"
        },
        value: 60
      }, {
        name: "Canada",
        coords: [56.1304, -106.3468],
        style: {
          fill: "#A798FF"
        },
        value: 20
      }, {
        name: "Greenland",
        coords: [71.7069, -42.6043],
        style: {
          fill: "#FF9777"
        },
        value: 40
      }],
      markerStyle: {
        initial: {
          fill: theme.palette.error.main,
          strokeWidth: 1
        }
      },
      markerLabelStyle: {
        initial: {
          fontFamily: theme.typography.fontFamily,
          fontSize: 12,
          fontWeight: 500,
          fill: theme.palette.text.primary
        }
      },
      labels: {
        markers: {
          render: marker => {
            return marker.name + " - " + marker.value;
          }
        }
      },
      regionStyle: {
        initial: {
          fill: theme.palette.mode === "light" ? theme.palette.primary[100] : theme.palette.divider
        },
        hover: {
          fill: theme.palette.primary.main
        }
      }
    });
    return () => map; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return <div id="map" style={{
    width: "100%",
    height: 300,
    marginTop: 10,
    marginBottom: 10
  }} />;
};

export default VectorMap;