import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, FormLabel, Radio, RadioGroup } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { useFormik } from "formik";
import * as Yup from "yup"; // component props interface

const AddTodoForm = props => {
  const {
    showAddTodoForm,
    setShowAddTodoForm
  } = props; // form field validation

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, "Too Short").required("Title is Required!"),
    date: Yup.date().required("Date is Required!"),
    description: Yup.string().min(10, "Too Short").required("Description is Required!")
  });
  const initialValues = {
    title: "",
    date: "",
    description: "",
    statusColor: "#61A9FF",
    mentionClient: ""
  };
  const {
    errors,
    values,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      setShowAddTodoForm(false);
    }
  });
  return <form onSubmit={handleSubmit}>
      <Box sx={{
      marginTop: 2,
      display: showAddTodoForm ? "auto" : "none"
    }}>
        <AppTextField fullWidth size="small" name="title" placeholder="Title" value={values.title} onChange={handleChange} helperText={touched.title && errors.title} error={Boolean(touched.title && errors.title)} sx={{
        mb: 1
      }} />

        <DatePicker value={values.date} onChange={newDate => setFieldValue("date", newDate)} slots={{
        textField: AppTextField
      }} slotProps={{
        textField: {
          name: "date",
          size: "small",
          fullWidth: true,
          helperText: touched.date && errors.date,
          error: Boolean(touched.date && errors.date),
          sx: {
            mb: 1
          }
        }
      }} />
        <AppTextField fullWidth size="small" name="mentionClient" placeholder="@mention Client" onChange={handleChange} value={values.mentionClient} sx={{
        mb: 1
      }} />
        <AppTextField rows={5} fullWidth multiline size="small" name="description" placeholder="Description" value={values.description} onChange={handleChange} error={Boolean(touched.description && errors.description)} helperText={touched.description && errors.description} />

        <FlexBox alignItems="center" mb="1rem">
          <FormLabel component="small" sx={{
          color: "text.secondary"
        }}>
            Select Color
          </FormLabel>
          <RadioGroup row name="statusColor" value={values.statusColor} onChange={handleChange}>
            <Radio value="#61A9FF" size="small" color="primary" />
            <Radio value="#2CC5BD" size="small" color="success" />
            <Radio value="#FD396D" size="small" color="error" />
            <Radio value="#A798FF" size="small" color="info" />
          </RadioGroup>
        </FlexBox>

        <FlexBox gap={2}>
          <Button variant="contained" fullWidth type="submit">
            Save
          </Button>

          <Button fullWidth variant="outlined" onClick={() => setShowAddTodoForm(false)}>
            Cancel
          </Button>
        </FlexBox>
      </Box>
    </form>;
};

export default AddTodoForm;