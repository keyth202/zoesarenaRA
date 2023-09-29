import { Add, LocalOffer, PersonAdd } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Grid, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import AppModal from "components/AppModal";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import RoundCheckBox from "components/RoundCheckBox";
import { H5, H6, Small, Tiny } from "components/Typography";
import { useState } from "react";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const Tasks = () => {
  const theme = useTheme();
  const {
    t
  } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  return <Card sx={{
    p: 3,
    mt: 3
  }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <H5 marginBottom={2}>{t("Tasks")}</H5>
          {tasks.map(task => <FormControlLabel key={task.title} control={<RoundCheckBox checked={task.status === "Completed"} />} label={<Box>
                  <H6 lineHeight={1} mb={0.3}>
                    {task.title}
                  </H6>
                  <Tiny color="text.disabled" fontWeight={500}>
                    {task.status}
                  </Tiny>
                </Box>} sx={{
          margin: 0,
          width: "100%",
          cursor: "default",
          paddingBottom: 1.5,
          alignItems: "flex-start",
          "& .MuiCheckbox-root": {
            padding: 0,
            paddingRight: 1.2
          },
          "&:last-child": {
            paddingBottom: 0
          }
        }} />)}

          <Button disableRipple startIcon={<Add fontSize="small" />} onClick={() => setOpenModal(true)} sx={{
          padding: 0,
          fontSize: 13,
          fontWeight: 500,
          color: "primary.main",
          "&:hover": {
            backgroundColor: "transparent"
          }
        }}>
            Create a new task
          </Button>

          <AppModal open={openModal} handleClose={() => setOpenModal(false)} sx={{
          width: 400
        }}>
            <H5 mb={2}>Create New Task</H5>
            <AppTextField multiline fullWidth rows={5} placeholder="Write new task..." sx={{
            "& textarea": {
              padding: "0 !important"
            },
            boxShadow: 2
          }} />
            <FlexBetween mt={3}>
              <FlexRowAlign>
                <LocalOffer fontSize="small" sx={{
                mr: 1.5,
                color: "text.disabled"
              }} />
                <Chip label="Chip Filled" size="small" sx={{
                fontSize: 12,
                fontWeight: 500,
                backgroundColor: "primary.100",
                color: theme.palette.mode === "light" ? "primary.main" : "background.paper"
              }} />
              </FlexRowAlign>

              <Button variant="dashed">
                <Add fontSize="small" sx={{
                color: "grey.600"
              }} />
              </Button>
            </FlexBetween>

            <Divider sx={{
            my: 1.5
          }} />

            <FlexBetween mb={5}>
              <FlexRowAlign gap={1}>
                <PersonAdd sx={{
                color: "text.disabled"
              }} />
                <Avatar src="/static/avatar/002-girl.svg" sx={{
                width: 30,
                height: 30,
                marginRight: 1,
                backgroundColor: "primary.100"
              }} />
                <Small fontWeight={500}>Samantha</Small>
              </FlexRowAlign>

              <Button variant="dashed">
                <Add fontSize="small" sx={{
                color: "grey.600"
              }} />
              </Button>
            </FlexBetween>

            <Button fullWidth variant="contained" onClick={() => setOpenModal(false)}>
              Done
            </Button>
          </AppModal>
        </Grid>

        <Grid item xs={12} sm={5}>
          <H5 marginBottom={2} textAlign="center">
            Weekly Progress
          </H5>

          <Chart type="radialBar" options={{
          colors: [theme.palette.primary.main],
          chart: {
            background: "transparent"
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%"
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: 10,
                  fontSize: "28px",
                  fontWeight: 600,
                  formatter: value => `${value}%`,
                  fontFamily: theme.typography.fontFamily
                }
              },
              track: {
                strokeWidth: "100%",
                background: theme.palette.divider
              }
            }
          },
          states: {
            normal: {
              filter: {
                type: "none"
              }
            },
            hover: {
              filter: {
                type: "none"
              }
            },
            active: {
              filter: {
                type: "none"
              }
            }
          },
          stroke: {
            curve: "smooth",
            lineCap: "round"
          },
          theme: {
            mode: theme.palette.mode
          }
        }} height={200} series={[75]} />
        </Grid>
      </Grid>
    </Card>;
};

const tasks = [{
  title: "Design",
  status: "Completed"
}, {
  title: "Development",
  status: "Ongoing"
}, {
  title: "Back End Development",
  status: "Upcoming"
}];
export default Tasks;