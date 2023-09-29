import { Box, Button, Card, Divider, Grid, styled, useTheme } from "@mui/material";
import { useFormik } from "formik";
import DateRange from "icons/DateRange";
import FlexBox from "components/flexbox/FlexBox";
import Bratislava from "icons/Bratislava";
import MapMarkerIcon from "icons/MapMarkerIcon";
import FlexBetween from "components/flexbox/FlexBetween";
import IconButton from "@mui/material/IconButton";
import AvatarBadge from "components/avatars/AvatarBadge";
import { H4, H5, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
import LinearProgress from "@mui/material/LinearProgress";
import { CameraAlt, KeyboardArrowDown } from "@mui/icons-material";
import * as Yup from "yup"; // styled components

const ContentWrapper = styled(Box)(({
  theme
}) => ({
  zIndex: 1,
  marginTop: 55,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 20,
    paddingRight: 20
  }
}));
const CoverPicWrapper = styled(Box)(({
  theme
}) => ({
  top: 0,
  left: 0,
  height: 125,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: theme.palette.background.default
}));
const ImageWrapper = styled(Box)(({
  theme
}) => ({
  width: 100,
  height: 100,
  margin: "auto",
  overflow: "hidden",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: "white",
  paddingTop: "12px",
  backgroundColor: theme.palette.background.default
}));

const BasicInformation = () => {
  const theme = useTheme();
  const initialValues = {
    firstName: "Pixy",
    lastName: "Krovasky",
    email: "uilib@gmail.com",
    phone: "+443322221111",
    organization: "UiLib",
    department: "Develop",
    country: "usa",
    state: "New York",
    address: "Corverview, Michigan",
    zipCode: 4336
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, "Must be greater then 3 characters").required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string().email("Invalid email address").required("Email is Required!"),
    phone: Yup.string().min(9).required("Phone Number is required!"),
    organization: Yup.string().required("Organization is Required!"),
    department: Yup.string().required("Department is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    address: Yup.string().required("Address is Required!"),
    zipCode: Yup.number().required("Zip Code is Required!")
  });
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values)
  });
  return <>
      <Card sx={{
      padding: 3,
      position: "relative"
    }}>
        <CoverPicWrapper>
          <img width="100%" height="100%" alt="Team Member" src="/static/background/user-cover-pic.png" style={{
          objectFit: "cover"
        }} />
        </CoverPicWrapper>

        <ContentWrapper>
          <FlexBox justifyContent="center">
            <AvatarBadge badgeContent={<label htmlFor="icon-button-file">
                  <input type="file" accept="image/*" id="icon-button-file" style={{
              display: "none"
            }} />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{
                fontSize: 16,
                color: "text.disabled"
              }} />
                  </IconButton>
                </label>}>
              <ImageWrapper>
                <img src="/static/avatar/001-man.svg" alt="Team Member" sizes="large" />
              </ImageWrapper>
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H4 fontWeight={600} textAlign="center">
              Pixy Krovasky
            </H4>

            <FlexBetween maxWidth={360} flexWrap="wrap" margin="auto" mt={1}>
              <FlexBox alignItems="center">
                <Bratislava sx={{
                color: "text.disabled",
                mr: 1,
                fontSize: 18
              }} />
                <Tiny color="text.secondary">Developer</Tiny>
              </FlexBox>

              <FlexBox alignItems="center">
                <MapMarkerIcon sx={{
                color: "text.disabled",
                mr: 1,
                fontSize: 18
              }} />
                <Tiny color="text.secondary">New York</Tiny>
              </FlexBox>

              <FlexBox alignItems="center">
                <DateRange sx={{
                color: "text.disabled",
                mr: 1,
                fontSize: 18
              }} />
                <Tiny color="text.secondary">Joined March 17</Tiny>
              </FlexBox>
            </FlexBetween>

            <FlexBetween marginTop={6} flexWrap="wrap" justifyContent="space-between">
              <Box minWidth={200} sx={{
              [theme.breakpoints.down(600)]: {
                minWidth: "100%",
                mb: 2
              }
            }}>
                <Tiny mb={0.5}>Profile Completion</Tiny>

                <FlexBox alignItems="center">
                  <LinearProgress value={50} color="success" variant="determinate" sx={{
                  flexGrow: 1,
                  mr: 1
                }} />
                  <Tiny fontWeight={600} color="text.primary">
                    50%
                  </Tiny>
                </FlexBox>
              </Box>

              <FlexBox>
                <Button variant="outlined" sx={{
                marginRight: 1
              }}>
                  Follow
                </Button>
                <Button variant="contained">Hire Me</Button>
              </FlexBox>
            </FlexBetween>
          </Box>
        </ContentWrapper>
      </Card>

      <Card sx={{
      mt: 3
    }}>
        <H5 padding={3}>Basic Information</H5>
        <Divider />

        <form onSubmit={handleSubmit}>
          <Box margin={3}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="firstName" label="First Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.firstName} helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="lastName" label="Last Name" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.lastName} helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="email" label="Email" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.email} helperText={touched.email && errors.email} error={Boolean(touched.email && errors.email)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="phone" label="Phone" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.phone} helperText={touched.phone && errors.phone} error={Boolean(touched.phone && errors.phone)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="organization" variant="outlined" label="Organization" onBlur={handleBlur} onChange={handleChange} value={values.organization} helperText={touched.organization && errors.organization} error={Boolean(touched.organization && errors.organization)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="department" variant="outlined" label="Department" onBlur={handleBlur} onChange={handleChange} value={values.department} helperText={touched.department && errors.department} error={Boolean(touched.department && errors.department)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField select fullWidth name="country" label="Country" variant="outlined" placeholder="Country" SelectProps={{
                native: true,
                IconComponent: KeyboardArrowDown
              }} onBlur={handleBlur} onChange={handleChange} value={values.country} helperText={touched.country && errors.country} error={Boolean(touched.country && errors.country)}>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="uae">United Arab Emirates</option>
                </AppTextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="state" label="State" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.state} helperText={touched.state && errors.state} error={Boolean(touched.state && errors.state)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth name="address" label="Address" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.address} helperText={touched.address && errors.address} error={Boolean(touched.address && errors.address)} />
              </Grid>

              <Grid item sm={6} xs={12}>
                <AppTextField fullWidth type="number" name="zipCode" label="Zip Code" variant="outlined" onBlur={handleBlur} onChange={handleChange} value={values.zipCode} helperText={touched.zipCode && errors.zipCode} error={Boolean(touched.zipCode && errors.zipCode)} />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined" sx={{
                ml: 2
              }}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Card>
    </>;
};

export default BasicInformation;