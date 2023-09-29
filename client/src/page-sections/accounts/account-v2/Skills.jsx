import { Clear, KeyboardArrowDown } from "@mui/icons-material";
import { Button, Card, Divider, Grid, IconButton, MenuItem, Select } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import MoreOptions from "components/MoreOptions";
import { H3 } from "components/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ListCard from "./ListCard";
import NewItemCard from "./NewItemCard";
import { StyledSelectInput } from "./StyledComponent"; // styled components

const Skills = () => {
  const {
    t
  } = useTranslation();
  const [skill, setSkill] = useState("Select a skill");
  const [skillEl, setSkillEl] = useState(null);

  const handleSkillMoreOpen = event => {
    setSkillEl(event.currentTarget);
  };

  const handleSkillMoreClose = () => setSkillEl(null); // ------------------------------------------------------------------


  const [stackEl, setStackEl] = useState(null);

  const handleStackMoreOpen = event => {
    setStackEl(event.currentTarget);
  };

  const handleStackMoreClose = () => setStackEl(null);

  return <>
      <Card sx={{
      padding: 3,
      pb: 4
    }}>
        <H3>{t("Skills")}</H3>

        <Grid container spacing={3} pt={3}>
          {designSkills.map(item => <Grid item xs={12} sm={6} key={item.id}>
              <ListCard item={item} handleMore={handleSkillMoreOpen} />
            </Grid>)}

          <MoreOptions anchorEl={skillEl} handleMoreClose={handleSkillMoreClose} />

          <Grid item xs={12} sm={6}>
            <NewItemCard />
          </Grid>
        </Grid>

        <Divider sx={{
        pt: 4,
        mb: 3
      }} />

        <H3>{t("Stacks")}</H3>
        <Grid container spacing={4} pt={3}>
          {stackSkills.map(item => <Grid item xs={12} sm={6} key={item.id}>
              <ListCard item={item} handleMore={handleStackMoreOpen} />
            </Grid>)}

          <MoreOptions anchorEl={stackEl} handleMoreClose={handleStackMoreClose} />

          <Grid item xs={12} sm={6}>
            <NewItemCard />
          </Grid>
        </Grid>
      </Card>

      <Card sx={{
      padding: 3,
      marginTop: 3
    }}>
        <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
          <H3>{t("New Skill")}</H3>

          <IconButton>
            <Clear sx={{
            color: "text.secondary"
          }} />
          </IconButton>
        </FlexBox>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Select value={skill} onChange={e => setSkill(e.target.value)} IconComponent={() => <KeyboardArrowDown />} input={<StyledSelectInput />}>
              <MenuItem disabled value="Select a skill" sx={{
              display: "none"
            }}>
                Select a Skill
              </MenuItem>
              <MenuItem value="one" sx={{
              fontSize: 12,
              fontWeight: 500
            }}>
                One
              </MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Select value={"Select a Skill"} onChange={e => console.log(e.target.value || undefined)} IconComponent={() => <KeyboardArrowDown />} input={<StyledSelectInput />}>
              <MenuItem disabled value="Select a Skill" sx={{
              fontSize: 12,
              fontWeight: 500
            }}>
                Select a Skill
              </MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Add Skill
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>;
};

const designSkills = [{
  id: 1,
  company: "Adobe Illustrator",
  image: "/static/tools-logo/illustrator.svg",
  position: "Design Software"
}, {
  id: 2,
  company: "Sketch",
  image: "/static/tools-logo/sketch.svg",
  position: "Design Software"
}, {
  id: 3,
  company: "Adobe Photoshop",
  image: "/static/tools-logo/photoshop.svg",
  position: "Design Software"
}];
const stackSkills = [{
  id: 1,
  company: "HTML5",
  image: "/static/tools-logo/html.svg",
  position: "Code"
}, {
  id: 2,
  company: "VueJS",
  image: "/static/tools-logo/vue.svg",
  position: "Code"
}, {
  id: 3,
  company: "Sass",
  image: "/static/tools-logo/sass.svg",
  position: "Code"
}];
export default Skills;