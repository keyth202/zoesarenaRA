import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Checkbox, Divider, FormHelperText } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { H1, H3, Paragraph, Small } from "components/Typography";
import { useFormik } from "formik";
import useAuth from "hooks/useAuth";
import FacebookIcon from "icons/FacebookIcon";
import GoogleIcon from "icons/GoogleIcon";
import { SocialIconButton, TextFieldWrapper } from "page-sections/authentication/StyledComponents";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const {
    register
  } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    terms: true,
    submit: null
  }; // form field value validation schema

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    password: Yup.string().min(6, "Password should be of minimum 6 characters length").required("Password is required")
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
    onSubmit: async values => {
      setLoading(true);

      try {
        await register(values.email, values.password, values.name);
        setLoading(false);
        toast.success("You registered successfully");
        navigate("/dashboard");
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    }
  });
  return <FlexRowAlign sx={{
    flexDirection: "column",
    height: {
      sm: "100%"
    }
  }}>
      <Card sx={{
      padding: 4,
      maxWidth: 600,
      boxShadow: 1
    }}>
        <FlexRowAlign flexDirection="column" mb={5}>
          <Box width={38} mb={1}>
            <img src="/static/logo/logo.svg" width="100%" alt="Uko Logo" />
          </Box>
          <H1 fontSize={24} fontWeight={700}>
            Get started with Uko
          </H1>
        </FlexRowAlign>

        <FlexBetween flexWrap="wrap" my="1rem">
          <SocialIconButton // onClick={loginWithGoogle}
        startIcon={<GoogleIcon sx={{
          mr: "0.5rem"
        }} />}>
            Sign up with Google
          </SocialIconButton>
          <SocialIconButton // onClick={loginWithFacebook}
        startIcon={<FacebookIcon sx={{
          mr: "0.5rem"
        }} />}>
            Sign up with Facebook
          </SocialIconButton>

          <Divider sx={{
          my: 3,
          width: "100%",
          alignItems: "center"
        }}>
            <H3 color="text.disabled" px={1}>
              Or
            </H3>
          </Divider>

          <form noValidate onSubmit={handleSubmit} style={{
          width: "100%"
        }}>
            <FlexBetween flexWrap="wrap">
              <TextFieldWrapper>
                <AppTextField fullWidth name="name" type="text" label="Name" onBlur={handleBlur} onChange={handleChange} value={values.name || ""} error={Boolean(touched.name && errors.name)} helperText={touched.name && errors.name} />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <AppTextField fullWidth name="email" type="email" label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email || ""} error={Boolean(touched.email && errors.email)} helperText={touched.email && errors.email} />
              </TextFieldWrapper>
            </FlexBetween>

            <TextFieldWrapper sx={{
            mt: 2,
            width: "100%"
          }}>
              <AppTextField fullWidth name="password" type="password" label="Password" onBlur={handleBlur} onChange={handleChange} value={values.password || ""} error={Boolean(touched.password && errors.password)} helperText={touched.password && errors.password} />
            </TextFieldWrapper>

            <FlexBox mt={1} alignItems="center" gap={1}>
              <Checkbox disableRipple checked={values.terms} onChange={handleChange} name="terms" />
              <Paragraph fontWeight={600}>
                I agree to terms & conditions
              </Paragraph>
            </FlexBox>

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
                  Sign Up
                </LoadingButton> : <Button fullWidth type="submit" variant="contained">
                  Sign Up
                </Button>}
            </Box>
          </form>

          <Paragraph marginLeft="auto" marginRight="auto" mt={2} color="text.disabled">
            Do you already have an account?{" "}
            <Link to="/login" style={{
            display: "inline-block"
          }}>
              <Small color="primary.main">Login</Small>
            </Link>
          </Paragraph>
        </FlexBetween>
      </Card>
    </FlexRowAlign>;
};

export default Register;