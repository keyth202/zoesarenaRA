import { TabContext, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import Activity from "page-sections/profiles/profile/activity";
import Campaigns from "page-sections/profiles/profile/campaigns";
import Connections from "page-sections/profiles/profile/connections";
import Documents from "page-sections/profiles/profile/documents";
import Layout from "page-sections/profiles/profile/Layout";
import Overview from "page-sections/profiles/profile/overview";
import Projects from "page-sections/profiles/profile/projects";
import { useState } from "react";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_, value) => setTabValue(value);

  return <Box pt={2} pb={4}>
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <Overview />
          </TabPanel>

          <TabPanel value="2">
            <Projects />
          </TabPanel>

          <TabPanel value="3">
            <Campaigns />
          </TabPanel>

          <TabPanel value="4">
            <Documents />
          </TabPanel>

          <TabPanel value="5">
            <Connections />
          </TabPanel>

          <TabPanel value="6">
            <Activity />
          </TabPanel>
        </Layout>
      </TabContext>
    </Box>;
};

export default Profile;