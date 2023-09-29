import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, FormHelperText } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { H1, Small } from "components/Typography";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "demo@example.com",
    submit: null
  }; // form field value validation schema

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required")
  });
  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Reset link has been sent!");
      }, 1000);

      if (error) {
        setError("Error!");
        setLoading(false);
      }
    }
  });
  return <FlexRowAlign height="100vh" flexDirection="column">
      <Card sx={{
      padding: 4,
      maxWidth: 600,
      marginTop: 4,
      boxShadow: 1
    }}>
        <FlexBetween flexDirection="column" mb={5}>
          <Box width={38} mb={1}>
            <img src="/static/logo/logo.svg" width="100%" alt="Uko Logo" />
          </Box>
          <H1 fontSize={18} fontWeight={500}>
            Reset your password
          </H1>
        </FlexBetween>

        <FlexBetween flexWrap="wrap" my={2}>
          <form noValidate onSubmit={handleSubmit} style={{
          width: "100%"
        }}>
            <AppTextField fullWidth name="email" type="email" label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email || ""} error={Boolean(touched.email && errors.email)} helperText={touched.email && errors.email} />

            {error && <FormHelperText error sx={{
            mt: 2,
            fontSize: 13,
            fontWeight: 500,
            textAlign: "center"
          }}>
                {error}
              </FormHelperText>}

            <Box sx={{
            mt: 4
          }}>
              {loading ? <LoadingButton loading fullWidth variant="contained">
                  Reset
                </LoadingButton> : <Button fullWidth type="submit" variant="contained">
                  Reset
                </Button>}
            </Box>
          </form>

          <Small margin="auto" mt={3} color="text.disabled">
            Don't have an account?{" "}
            <Link to="/register" style={{
            display: "inline-block"
          }}>
              <Small color="primary.main">Create an account</Small>
            </Link>
          </Small>
        </FlexBetween>
      </Card>
    </FlexRowAlign>;
};

export default ForgetPassword;