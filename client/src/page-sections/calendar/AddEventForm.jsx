import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box, Button, Divider, FormControlLabel, FormHelperText, Switch, TextField, Typography } from "@mui/material";
import { addMinutes } from "date-fns";
import { Formik } from "formik";
import * as Yup from "yup";

const AddEventForm = ({
  onCancel
}) => {
  const fieldValidationSchema = Yup.object().shape({
    title: Yup.string().max(255).required("Title is required"),
    description: Yup.string().max(5000),
    allDay: Yup.bool(),
    start: Yup.date(),
    end: Yup.date().when("start", (start, schema) => start && schema.min(start, "End date must be later than start date"))
  });
  const initialValues = {
    allDay: false,
    color: "",
    description: "",
    end: addMinutes(new Date(), 30),
    start: new Date(),
    title: "",
    submit: null
  };
  return <Formik initialValues={initialValues} validationSchema={fieldValidationSchema} onSubmit={values => {
    console.log(values);
  }}>
      {({
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      setFieldValue,
      touched,
      values
    }) => <form onSubmit={handleSubmit}>
          <Box sx={{
        p: 3
      }}>
            <Typography align="center" color="textPrimary" gutterBottom variant="h5">
              Add Event
            </Typography>
          </Box>

          <Box sx={{
        p: 3
      }}>
            <TextField fullWidth name="title" placeholder="Event Title" value={values.title} onBlur={handleBlur} onChange={handleChange} error={Boolean(touched.title && errors.title)} helperText={touched.title && errors.title} />

            <Box sx={{
          mt: 2
        }}>
              <TextField fullWidth name="description" placeholder="Event Description" value={values.description} onBlur={handleBlur} onChange={handleChange} error={Boolean(touched.description && errors.description)} helperText={touched.description && errors.description} />
            </Box>

            <Box sx={{
          mt: 2
        }}>
              <FormControlLabel control={<Switch checked={values.allDay} color="primary" name="allDay" onChange={handleChange} />} label="All day" />
            </Box>

            <Box sx={{
          mt: 2
        }}>
              <DateTimePicker label="Start date" value={values.start} onChange={date => setFieldValue("start", date)} slots={{
            textField: TextField
          }} slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined"
            }
          }} />
            </Box>

            <Box sx={{
          mt: 2
        }}>
              <DateTimePicker label="End date" value={values.end} onChange={date => setFieldValue("end", date)} slots={{
            textField: TextField
          }} slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined"
            }
          }} />
            </Box>

            {Boolean(touched.end && errors.end) && <Box sx={{
          mt: 2
        }}>
                <FormHelperText error>{errors.end}</FormHelperText>
              </Box>}
          </Box>
          <Divider />

          <Box sx={{
        alignItems: "center",
        display: "flex",
        p: 2
      }}>
            <Box sx={{
          flexGrow: 1
        }} />

            <Button color="primary" onClick={onCancel} variant="text">
              Cancel
            </Button>

            <Button color="primary" disabled={isSubmitting} sx={{
          ml: 1
        }} type="submit" variant="contained">
              Confirm
            </Button>
          </Box>
        </form>}
    </Formik>;
};

export default AddEventForm;