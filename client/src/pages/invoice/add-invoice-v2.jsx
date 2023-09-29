import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, Card, Divider, Grid, Radio, styled } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H3, H4, H6, Small, Span } from "components/Typography";
import { ErrorMessage, FieldArray, Formik } from "formik";
import Delete from "icons/Delete";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"; // styled components

const StyledFormControl = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": {
    fontWeight: 600,
    fontSize: 14
  }
}));
const StyledFlexBox = styled(FlexBox)(({
  theme
}) => ({
  marginBottom: 30,
  [theme.breakpoints.down(750)]: {
    "& .MuiFormGroup-root": {
      marginBottom: 10
    }
  },
  [theme.breakpoints.down(394)]: {
    "& .MuiButton-root, & .buttonWrapper": {
      width: "100%"
    },
    "& .MuiButton-outlined": {
      marginRight: 0,
      marginBottom: 10
    }
  }
}));

const AddInvoice = () => {
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();

  const handleCancel = () => navigate("/dashboard/invoice-list");

  const initialValues = {
    orderNo: 204,
    billTo: "",
    billFrom: "",
    billToPhone: "",
    billToAddress: "",
    billFromPhone: "",
    status: "Pending",
    billFromAddress: "",
    orderDate: new Date(),
    items: [{
      id: 1,
      itemName: "",
      itemPrice: 0,
      itemQuantity: 0
    }]
  };
  const validationSchema = Yup.object().shape({
    billTo: Yup.string().required("Bill To is Required!"),
    billToAddress: Yup.string().required("Address is Required!"),
    billToPhone: Yup.number().positive().required("Phone is Required!"),
    billFrom: Yup.string().required("Bill From is Required!"),
    billFromAddress: Yup.string().required("Address is Required!"),
    billFromPhone: Yup.number().positive().required("Phone is Required!"),
    status: Yup.string().default(() => "Pending"),
    items: Yup.array().of(Yup.object().shape({
      itemName: Yup.string().required("Item Name Required"),
      itemPrice: Yup.number().required("Item Name Required"),
      itemQuantity: Yup.number().required("Item Name Required")
    }))
  });
  return <Box pt={2} pb={4}>
      <Card sx={{
      padding: 4
    }}>
        <H3 marginBottom={2}>{t("Order Status")}</H3>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => console.log(values)} children={({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleSubmit
      }) => {
        return <form onSubmit={handleSubmit}>
                <StyledFlexBox justifyContent="space-between" alignItems="center" flexWrap="wrap">
                  <RadioGroup row name="status" defaultValue={values.status} onChange={handleChange}>
                    {["Pending", "Processing", "Delivered"].map(item => <StyledFormControl key={item} value={item} label={item} control={<Radio />} />)}
                  </RadioGroup>

                  <Box className="buttonWrapper">
                    <Button fullWidth variant="outlined" onClick={handleCancel} sx={{
                width: 124,
                fontSize: 12,
                marginRight: 2,
                color: "text.disabled",
                borderColor: "text.disabled"
              }}>
                      {t("Cancel")}
                    </Button>
                    <Button fullWidth type="submit" variant="contained" sx={{
                width: 124,
                fontSize: 12
              }}>
                      {t("Save")}
                    </Button>
                  </Box>
                </StyledFlexBox>

                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <AppTextField fullWidth name="orderNo" label="Order Number" value={values.orderNo} onChange={handleChange} />
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <DatePicker label="Order Date" value={values.orderDate} onChange={newValue => setFieldValue("orderDate", newValue)} slots={{
                textField: AppTextField
              }} slotProps={{
                textField: {
                  fullWidth: true
                }
              }} />
                  </Grid>
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <Box marginBottom={2}>
                      <AppTextField fullWidth name="billTo" label="Bill to" value={values.billTo} onChange={handleChange} error={Boolean(touched.billTo && errors.billTo)} helperText={touched.billTo && errors.billTo} />
                    </Box>

                    <Box marginBottom={2}>
                      <AppTextField fullWidth name="billToAddress" label="Bill to Address" value={values.billToAddress} onChange={handleChange} error={Boolean(touched.billToAddress && errors.billToAddress)} helperText={touched.billToAddress && errors.billToAddress} />
                    </Box>

                    <Box>
                      <AppTextField fullWidth type="number" name="billToPhone" label="Bill to Phone" value={values.billToPhone} onChange={handleChange} error={Boolean(touched.billToPhone && errors.billToPhone)} helperText={touched.billToPhone && errors.billToPhone} />
                    </Box>
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <Box marginBottom={2}>
                      <AppTextField fullWidth name="billFrom" label="Bill From" value={values.billFrom} onChange={handleChange} error={Boolean(touched.billFrom && errors.billFrom)} helperText={touched.billFrom && errors.billFrom} />
                    </Box>

                    <Box marginBottom={2}>
                      <AppTextField fullWidth name="billFromAddress" label="Bill from Address" onChange={handleChange} value={values.billFromAddress} error={Boolean(touched.billFromAddress && errors.billFromAddress)} helperText={touched.billFromAddress && errors.billTo} />
                    </Box>

                    <Box>
                      <AppTextField fullWidth type="number" name="billFromPhone" label="Bill from Phone" onChange={handleChange} value={values.billFromPhone} error={Boolean(touched.billFromPhone && errors.billFromPhone)} helperText={touched.billFromPhone && errors.billFromPhone} />
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Grid container spacing={2} alignItems="flex-end">
                  <FieldArray name="items" render={arrayHelper => {
              return <Fragment>
                          <Grid item xs={12}>
                            <Button variant="contained" size="small" onClick={() => arrayHelper.push({
                    id: Date.now(),
                    itemName: "",
                    itemPrice: 0,
                    itemQuantity: 0
                  })} sx={{
                    marginBottom: 2
                  }}>
                              {t("Add New Item")}
                            </Button>
                          </Grid>

                          {values.items.map((item, index) => <Grid container key={item.id}>
                              <Grid item mx={2} md={4} sm={4} xs={12}>
                                <AppTextField fullWidth label="Item Name" size="small" name={`items.${index}.itemName`} value={item.itemName} onChange={handleChange} />
                                <ErrorMessage name={`items.${index}.itemName`} render={msg => <Small color="secondary.red" mx={2}>
                                      {msg}
                                    </Small>} />
                              </Grid>

                              <Grid item mx={1} md={2} sm={3} xs={6}>
                                <AppTextField fullWidth label="Item Price" size="small" type="number" name={`items.${index}.itemPrice`} value={item.itemPrice} onChange={handleChange} />
                              </Grid>

                              <Grid item mx={1} md={2} sm={3} xs={6}>
                                <AppTextField type="number" fullWidth size="small" label="Item Quantity" name={`items.${index}.itemQuantity`} value={item.itemQuantity} onChange={handleChange} />
                              </Grid>

                              <Grid item md={2} sm={2} xs={12}>
                                <IconButton onClick={() => arrayHelper.remove(index)}>
                                  <Delete sx={{
                        color: "text.disabled"
                      }} />
                                </IconButton>
                              </Grid>
                            </Grid>)}
                        </Fragment>;
            }} />
                </Grid>

                <Divider sx={{
            my: 4
          }} />

                <Box maxWidth={320}>
                  <H4 fontWeight={600}>{t("Amount")}</H4>

                  <FlexBox alignItems="center" justifyContent="space-between" my={1}>
                    <H6 fontWeight={500}>{t("Subtotal")}</H6>
                    <H6 fontWeight={500}>$428.00</H6>
                  </FlexBox>

                  <FlexBox alignItems="center" justifyContent="space-between" my={1}>
                    <H6 fontWeight={500}>
                      {t("Discount")}
                      <Span color="text.disabled"> (BLACKFRIDAY)</Span>
                    </H6>
                    <H6 fontWeight={500}>-$8.00</H6>
                  </FlexBox>

                  <FlexBox alignItems="center" justifyContent="space-between" my={1}>
                    <H6 fontWeight={500}>VAT</H6>
                    <H6 fontWeight={500}>$20.00</H6>
                  </FlexBox>

                  <Divider sx={{
              my: 2
            }} />

                  <FlexBox alignItems="center" justifyContent="space-between" my={1}>
                    <H6>{t("Total")}</H6>
                    <H6>$20.00</H6>
                  </FlexBox>
                </Box>
              </form>;
      }} />
      </Card>
    </Box>;
};

export default AddInvoice;