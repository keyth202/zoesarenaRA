import { CameraAlt, Clear, Facebook, Instagram, SportsBasketball, Twitter } from "@mui/icons-material";
import { Autocomplete, Box, Button, Card, Divider, Grid, IconButton } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H5, Tiny } from "components/Typography";
import { useFormik } from "formik";
import useAuth from "hooks/useAuth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { StyledBadge, StyledChip, StyledInput } from "./StyledComponent";

const UserInfo = () => {
  const {
    user
  } = useAuth();
  const {
    t
  } = useTranslation();
  const [value, setValue] = useState([tagList[0]]);
  const initialValues = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    location: "",
    bio: "",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    workRemotely: ""
  };
  const fieldValidationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "Too Short").required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    jobTitle: Yup.string().required("Job Title is Required!"),
    location: Yup.string().required("Location is Required!"),
    bio: Yup.string().min(10, "Too short").required("Bio is Required!")
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });
  return <Card sx={{
    padding: "1.5rem",
    pb: "4rem"
  }}>
      <H5>{t("Edit your account information:")}</H5>
      <form onSubmit={handleSubmit}>
        <FlexBox my="1.5rem" flexWrap="wrap" alignItems="center" justifyContent="space-between">
          <FlexBox alignItems="center">
            <StyledBadge overlap="circular" anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }} badgeContent={<label htmlFor="icon-button-file">
                  <input type="file" accept="image/*" id="icon-button-file" style={{
              display: "none"
            }} />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt sx={{
                fontSize: 16,
                color: "background.paper"
              }} />
                  </IconButton>
                </label>}>
              <AppAvatar alt="Travis Howard" src={user?.avatar || "/static/avatar/001-man.svg"} sx={{
              width: 90,
              height: 90
            }} />
            </StyledBadge>
            <Box ml="1rem">
              <H5>{user?.name}</H5>
              <Tiny color="text.primary">UI / UX Designer</Tiny>
            </Box>
          </FlexBox>

          <FlexBox justifyContent="space-between" width={270}>
            <Button variant="outlined" sx={{
            width: 124,
            color: "text.disabled",
            borderColor: "text.disabled"
          }} fullWidth>
              {t("Cancel")}
            </Button>
            <Button fullWidth type="submit" variant="contained" sx={{
            width: 124
          }}>
              {t("Save")}
            </Button>
          </FlexBox>
        </FlexBox>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth name="firstName" label="First Name" value={values.firstName} onChange={handleChange} helperText={touched.firstName && errors.firstName} error={Boolean(touched.firstName && errors.firstName)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth name="lastName" label="Last Name" value={values.lastName} onChange={handleChange} helperText={touched.lastName && errors.lastName} error={Boolean(touched.lastName && errors.lastName)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth name="jobTitle" label="Job Title" value={values.jobTitle} onChange={handleChange} helperText={touched.jobTitle && errors.jobTitle} error={Boolean(touched.jobTitle && errors.jobTitle)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth name="location" label="Location" value={values.location} onChange={handleChange} helperText={touched.location && errors.location} error={Boolean(touched.location && errors.location)} />
          </Grid>
          <Grid item xs={12}>
            <AppTextField fullWidth multiline rows={10} name="bio" value={values.bio} onChange={handleChange} label="About you / Bio" helperText={touched.bio && errors.bio} error={Boolean(touched.bio && errors.bio)} sx={{
            "& .MuiOutlinedInput-root textarea": {
              padding: 0
            }
          }} />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{
            width: "100%"
          }} />
          </Grid>

          <Grid item xs={12}>
            <H5>{t("Professional Info")}</H5>
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth label="Is this your fist job?" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth label="Are you Flexible" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextField fullWidth label="Do you work remotely" />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete multiple value={value} popupIcon={false} clearIcon={false} options={tagList} getOptionLabel={option => option} onChange={(_, newValue) => setValue(newValue)} renderInput={params => renderInput(params)} renderTags={(tagValue, getTagProps) => renderTags(tagValue, getTagProps)} />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{
            width: "100%"
          }} />
          </Grid>

          <Grid item xs={12}>
            <H5>{t("Social Profiles")}</H5>
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledInput fullWidth name="facebookUrl" onChange={handleChange} value={values.facebookUrl} placeholder="Facebook URL" startAdornment={<Facebook sx={iconStyle} />} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput fullWidth name="twitterUrl" onChange={handleChange} value={values.twitterUrl} placeholder="Twitter URL" startAdornment={<Twitter sx={iconStyle} />} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput fullWidth name="instagramUrl" onChange={handleChange} value={values.instagramUrl} placeholder="Instagram URL" startAdornment={<Instagram sx={iconStyle} />} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledInput fullWidth name="workRemotely" onChange={handleChange} value={values.workRemotely} placeholder="Do you work remotely" startAdornment={<SportsBasketball sx={iconStyle} />} />
          </Grid>
        </Grid>
      </form>
    </Card>;
}; // common social icons styles


const iconStyle = {
  mr: 1,
  color: "text.disabled"
}; // autocomplete render input function

const renderInput = params => <AppTextField {...params} placeholder="Add Tags" sx={{
  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
    padding: 0
  }
}} />; // autocomplete render tag function


const renderTags = (tagValue, getTagProps) => tagValue.map((option, index) => <StyledChip label={option} deleteIcon={<Clear />} {...getTagProps({
  index
})} sx={{
  bgcolor: "grey.200",
  color: "text.primary"
}} />); // tag list item


const tagList = ["Developer", "React Developer", "Back-End Developer", "Front-End Developer", "JavaScript Developer"];
export default UserInfo;