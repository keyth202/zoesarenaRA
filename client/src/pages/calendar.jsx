import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import AddEventForm from "page-sections/calendar/AddEventForm";
import { Box, Card, Dialog, Grid, styled } from "@mui/material";
import HeaderToolbar from "page-sections/calendar/HeaderToolbar";
import { useRef, useState } from "react"; // styled component

const CalendarWrapper = styled(Box)(({
  theme
}) => ({
  padding: "1.5rem",
  "& .fc-theme-standard td, & .fc-theme-standard th": {
    border: "none"
  },
  "& .fc-theme-standard, & .fc-scrollgrid": {
    border: "none !important"
  },
  "& .fc .fc-scroller-harness-liquid": {
    marginTop: "1rem"
  },
  "& .fc th": {
    color: theme.palette.primary.main
  },
  "& .fc-daygrid-day-top": {
    justifyContent: "center",
    alignItems: "center",
    height: "inherit"
  },
  "& .fc .fc-daygrid-day.fc-day-today": {
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
    "& a": {
      color: theme.palette.background.paper
    }
  },
  "& .fc-daygrid-day-number": {
    fontWeight: 600
  },
  "& .fc-h-event": {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    textAlign: "center"
  },
  "& .fc-daygrid-day-bottom a": {
    backgroundColor: theme.palette.primary.main,
    display: "block",
    textAlign: "center",
    color: theme.palette.background.paper,
    fontSize: 10,
    fontWeight: 500
  },
  "& .fc .fc-popover": {
    border: "none",
    borderRadius: "8px",
    boxShadow: theme.shadows[1],
    zIndex: 111
  },
  "& .fc .fc-popover-header": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: 12,
    fontWeight: 600,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px"
  },
  "& .fc .fc-daygrid-event-harness": {
    padding: 3,
    cursor: "pointer"
  }
}));

const Calendar = () => {
  const calendarRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [openAddEventForm, setAddEventForm] = useState(false); // month change handler

  const handleDatePrevAndNext = direction => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      if (direction === "prev") calendarApi.prev();
      if (direction === "next") calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleEventSelect = args => {
    console.log(args);
    setAddEventForm(true);
  };

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <HeaderToolbar date={date} onDatePrev={() => handleDatePrevAndNext("prev")} onDateNext={() => handleDatePrevAndNext("next")} onAddEventForm={() => setAddEventForm(true)} />
            <CalendarWrapper>
              <FullCalendar dayMaxEventRows={0} eventDisplay="block" initialDate={date} eventClick={handleEventSelect} plugins={[dayGridPlugin, interactionPlugin]} ref={calendarRef} height={600} rerenderDelay={10} events={[{
              title: "Weekly Meeting With HR",
              date: "2021-09-21"
            }, {
              title: "Weekly Meeting With HR",
              date: "2021-09-21"
            }]} headerToolbar={false} />
            </CalendarWrapper>
          </Card>

          <Dialog fullWidth open={openAddEventForm} onClose={() => setAddEventForm(false)}>
            <AddEventForm onCancel={() => setAddEventForm(false)} />
          </Dialog>
        </Grid>
      </Grid>
    </Box>;
};

export default Calendar;