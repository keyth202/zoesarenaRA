import { Card, Grid } from "@mui/material";
import MoreOptions from "components/MoreOptions";
import { H3 } from "components/Typography";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ListCard from "./ListCard";
import NewItemCard from "./NewItemCard";

const Experiences = () => {
  const {
    t
  } = useTranslation();
  const [moreEl, setMoreEl] = useState(null);

  const handleMoreOpen = event => {
    setMoreEl(event.currentTarget);
  };

  const handleMoreClose = () => setMoreEl(null);

  return <Card sx={{
    padding: "1.5rem",
    pb: "4rem"
  }}>
      <H3>{t("Work Experiences")}</H3>

      <Grid container spacing={4} pt="1.5rem">
        {experienceList.map(item => <Grid item xs={12} sm={6} key={item.id}>
            <ListCard item={item} handleMore={handleMoreOpen} />
          </Grid>)}

        <MoreOptions anchorEl={moreEl} handleMoreClose={handleMoreClose} />

        <Grid item xs={12} sm={6}>
          <NewItemCard />
        </Grid>
      </Grid>
    </Card>;
};

const experienceList = [{
  id: 1,
  company: "Discord Nitro",
  image: "/static/brand-logo/nitro.svg",
  position: "Comtec Specialist"
}, {
  id: 2,
  company: "Invision",
  image: "/static/brand-logo/invision.svg",
  position: "Design prototype"
}, {
  id: 3,
  company: "Amazon",
  image: "/static/brand-logo/amazon.svg",
  position: "Delivery"
}, {
  id: 4,
  company: "Github",
  image: "/static/brand-logo/github.svg",
  position: "Developer"
}];
export default Experiences;