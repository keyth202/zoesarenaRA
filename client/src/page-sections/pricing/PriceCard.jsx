import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Card, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { H1, H6 } from "components/Typography";
import React from "react"; // component props interface

const PriceCard = ({
  item
}) => {
  return <Card>
      <Box sx={{
      padding: 4,
      borderBottom: 1,
      borderColor: "divider"
    }}>
        <H1 fontWeight={700}>{item.title}</H1>
        <H6 color="text.disabled">{item.subTitle}</H6>
      </Box>

      <Box padding={4}>
        <List>
          {item.list.map((li, index) => <ListItem sx={{
          px: 0
        }} key={index}>
              <ListItemIcon>
                <CheckCircle sx={{
              color: "primary.main"
            }} />
              </ListItemIcon>
              <ListItemText sx={{
            "& .MuiTypography-root": {
              fontWeight: 500,
              color: "text.disabled"
            }
          }}>
                {li}
              </ListItemText>
            </ListItem>)}
        </List>
      </Box>

      <Box padding={4} paddingTop={0}>
        <Button fullWidth variant="contained" endIcon={<ArrowForward fontSize="large" />}>
          {item.btnText}
        </Button>
      </Box>
    </Card>;
};

export default PriceCard;