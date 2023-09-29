import { Box, Button, Card, Divider, Grid, Stack, styled } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small, Tiny } from "components/Typography";
import AppTextField from "components/input-fields/AppTextField";
const Dot = styled(Box)(({
  theme
}) => ({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: "50%",
  backgroundColor: theme.palette.text.secondary
}));

const Password = () => {
  const initialValues = {
    currentPassword: "12345",
    newPassword: "123456",
    confirmNewPassword: "123456"
  };
  const validationSchema = Yup.object({
    currentPassword: Yup.string().min(3, "Must be greater then 3 characters").required("Current Password is Required!"),
    newPassword: Yup.string().min(8).required("New Password is Required!"),
    confirmNewPassword: Yup.string().test("passwords-match", "Password doesn't matched", function (value) {
      return this.parent.newPassword === value;
    })
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
  return <Card>
      <H5 padding={3}>Password</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={5}>
          <Grid item sm={6} xs={12}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <AppTextField fullWidth type="password" variant="outlined" name="currentPassword" label="Current Password" onBlur={handleBlur} onChange={handleChange} value={values.currentPassword} helperText={touched.currentPassword && errors.currentPassword} error={Boolean(touched.currentPassword && errors.currentPassword)} />

                <AppTextField fullWidth type="password" name="newPassword" variant="outlined" label="New Password" onBlur={handleBlur} onChange={handleChange} value={values.newPassword} helperText={touched.newPassword && errors.newPassword} error={Boolean(touched.newPassword && errors.newPassword)} />
                <AppTextField fullWidth type="password" variant="outlined" name="confirmNewPassword" label="Confirm Password" onBlur={handleBlur} onChange={handleChange} value={values.confirmNewPassword} helperText={touched.confirmNewPassword && errors.confirmNewPassword} error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)} />
              </Stack>

              <Stack direction="row" spacing={3} mt={4}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Stack>
            </form>
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6>Password requirements:</H6>
            <Tiny lineHeight={1.7}>
              Ensure that these requirements are met:
            </Tiny>

            <Stack spacing={1} mt={2}>
              <FlexBox alignItems="center">
                <Dot mr={1} />
                <Small fontSize={12} color="text.secondary">
                  Minimum 8 characters long - the more, the better
                </Small>
              </FlexBox>

              <FlexBox alignItems="center">
                <Dot mr={1} />
                <Small fontSize={12} color="text.secondary">
                  At least one lowercase character
                </Small>
              </FlexBox>

              <FlexBox alignItems="center">
                <Dot mr={1} />
                <Small fontSize={12} color="text.secondary">
                  At least one uppercase character
                </Small>
              </FlexBox>

              <FlexBox alignItems="center">
                <Dot mr={1} />
                <Small fontSize={12} color="text.secondary">
                  At least one number, symbol, or whitespace character
                </Small>
              </FlexBox>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>;
};

export default Password;