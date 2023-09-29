import { Box, Button, Card, Divider, Grid, IconButton } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, H4, H6, Span, Tiny } from "components/Typography";
import PencilIcon from "icons/PencilIcon";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const InvoiceDetails = () => {
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  return <Box pt={2} pb={4}>
      <Card sx={{
      padding: 4
    }}>
        <FlexBetween>
          <H3>{t("Invoice Info")}</H3>
          <IconButton>
            <PencilIcon sx={{
            fontSize: 16,
            color: "text.disabled"
          }} />
          </IconButton>
        </FlexBetween>

        <Grid container spacing={3} mt={0}>
          <Grid item md={4} xs={6}>
            <H6 color="text.secondary">{t("Order Number")}</H6>
            <H4 fontWeight={500}>#46876458</H4>
          </Grid>

          <Grid item md={4} xs={6}>
            <H6 color="text.secondary">{t("Order Date")}</H6>
            <H4 fontWeight={500}>02.12.2021</H4>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 3
      }} />

        <Grid container spacing={3}>
          <Grid item md={4} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Bill To")}
            </H6>
            <H4 fontWeight={600}>Jhone Hanks</H4>
            <H6 fontWeight={500}>Arizona, USA</H6>
            <H6 fontWeight={500}>+003344422</H6>
          </Grid>

          <Grid item md={4} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Bill From")}
            </H6>
            <H4 fontWeight={600}>UI lib</H4>
            <H6 fontWeight={500}>Zindabazar, Sylhet</H6>
            <H6 fontWeight={500}>+013145813</H6>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 3
      }} />

        <Grid container spacing={3}>
          <Grid item md={4} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Client")}
            </H6>
          </Grid>

          <Grid item md={4} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Item Name")}
            </H6>
          </Grid>

          <Grid item md={2} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Price")}
            </H6>
          </Grid>

          <Grid item md={2} xs={6}>
            <H6 color="text.secondary" fontWeight={600} mb={1.5}>
              {t("Quantity")}
            </H6>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item md={4} xs={6}>
            <FlexBox alignItems="center">
              <Box sx={{
              width: 40,
              height: 40,
              marginRight: 1,
              overflow: "hidden",
              borderRadius: "50%",
              backgroundColor: "primary.100"
            }}>
                <img src="/static/avatar/001-man.svg" alt="" />
              </Box>
              <Box>
                <H6>Jhone Hanks</H6>
                <Tiny fontWeight={500} color="text.secondary">
                  UI Designer
                </Tiny>
              </Box>
            </FlexBox>
          </Grid>

          <Grid item md={4} xs={6}>
            <H6 fontWeight={500}>UI Lib Uko</H6>
          </Grid>

          <Grid item md={2} xs={6}>
            <H6 fontWeight={500}>$450</H6>
          </Grid>

          <Grid item md={2} xs={6}>
            <H6 fontWeight={500}>2</H6>
          </Grid>
        </Grid>

        <Divider sx={{
        my: 3
      }} />

        <Box maxWidth={320}>
          <H4 fontWeight={600}>{t("Amount")}</H4>

          <FlexBetween my={1}>
            <H6 fontWeight={500}>Subtotal</H6>
            <H6 fontWeight={500}>$428.00</H6>
          </FlexBetween>

          <FlexBetween my={1}>
            <H6 fontWeight={500}>
              Discount <Span color="text.secondary">(BLACKFRIDAY)</Span>
            </H6>
            <H6 fontWeight={500}>-$8.00</H6>
          </FlexBetween>

          <FlexBetween my={1}>
            <H6 fontWeight={500}>VAT</H6>
            <H6 fontWeight={500}>$20.00</H6>
          </FlexBetween>

          <Divider sx={{
          my: 2
        }} />

          <FlexBetween my={1}>
            <H6>Total</H6>
            <H6>$20.00</H6>
          </FlexBetween>

          <FlexBetween my={1}>
            <H6>Status</H6>
            <H6>Unpaid</H6>
          </FlexBetween>

          <Box mt={4}>
            <Button size="small" variant="outlined" onClick={() => window.print()} sx={{
            marginRight: 2
          }}>
              Print Invoice
            </Button>

            <Button variant="contained" size="small" onClick={() => navigate("/dashboard/add-invoice")} sx={{
            fontSize: 12,
            fontWeight: 500,
            backgroundColor: "secondary.red",
            "&:hover": {
              backgroundColor: "secondary.red"
            }
          }}>
              Edit
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>;
};

export default InvoiceDetails;