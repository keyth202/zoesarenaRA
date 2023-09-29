// chart options
export const chartBarOptions = (theme, chartCategories) => {
  return {
    chart: {
      background: "transparent",
      toolbar: {
        show: false
      },
      stacked: true
    },
    colors: [theme.palette.primary.main, theme.palette.primary[300], theme.palette.primary[100]],
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false
    },
    states: {
      active: {
        filter: {
          type: "none"
        }
      },
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      categories: chartCategories,
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontWeight: 500
        }
      }
    },
    yaxis: {
      show: false
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "30%",
        rangeBarOverlap: false
      }
    },
    tooltip: {
      x: {
        show: false
      },
      y: {
        formatter: val => `${val}`
      }
    },
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      fontSize: "13px",
      fontWeight: 500,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      },
      offsetY: 8
    }
  };
};