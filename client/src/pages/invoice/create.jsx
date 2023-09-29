import { KeyboardArrowDown, Send } from "@mui/icons-material";
import { Button, Card, Divider, Grid, Stack, styled, Switch } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import AppTextField from "components/input-fields/AppTextField";
import Scrollbar from "components/ScrollBar";
import { H2, H5, Span } from "components/Typography";
import Delete from "icons/Delete";
import { useState } from "react"; // styled components

const BodyTableCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 600,
  "&:last-of-type": {
    textAlign: "right"
  }
}));
const HeadTableCell = styled(BodyTableCell)(({
  theme
}) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`
}));

const CreateInvoice = () => {
  const [items, setItems] = useState([{
    id: 1,
    name: "Name 1",
    qty: 2,
    price: 25
  }, {
    id: 2,
    name: "Name 2",
    qty: 2,
    price: 25
  }]);

  const handleAddItem = () => {
    setItems([...items, {
      id: Date.now(),
      name: "Name 3",
      qty: 1,
      price: 20
    }]);
  };

  const getSubTotal = () => items.reduce((prev, curr) => prev += curr.price * curr.qty, 0);

  const handleDeleteItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleUpdateItem = (e, id) => {
    const fieldName = e.target.getAttribute("name");
    setItems(items => items.map(item => {
      if (item.id === id) {
        item[fieldName] = e.target.value;
      }

      return item;
    }));
  };

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Card sx={{
          padding: 2
        }}>
            <H2>
              Invoice #{" "}
              <Span fontSize={14} color="text.disabled">
                12345678
              </Span>
            </H2>

            <Divider sx={{
            my: 1
          }} />

            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <H5 my={2}>Bill From:</H5>

                <Stack spacing={3}>
                  <AppTextField label="Name" />
                  <AppTextField label="Email" placeholder="Email" />
                  <AppTextField multiline rows={3} label="Who is this invoice from?" placeholder="Who is this invoice from?" />
                </Stack>
              </Grid>

              <Grid item sm={6} xs={12}>
                <H5 my={2}>Bill To:</H5>

                <Stack spacing={3}>
                  <AppTextField label="Name" placeholder="Name" />
                  <AppTextField label="Email" placeholder="Email" />
                  <AppTextField multiline rows={3} label="What is this invoice for?" placeholder="What is this invoice for?" />
                </Stack>
              </Grid>
            </Grid>

            <Box my={3}>
              <Scrollbar autoHide={false}>
                <Table sx={{
                minWidth: 700
              }}>
                  <TableHead>
                    <TableRow>
                      <HeadTableCell>Item</HeadTableCell>
                      <HeadTableCell>Qty</HeadTableCell>
                      <HeadTableCell>Price</HeadTableCell>
                      <HeadTableCell>Total</HeadTableCell>
                      <HeadTableCell>Action</HeadTableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {items.map(item => <TableRow key={item.id}>
                        <BodyTableCell>
                          <AppTextField onChange={e => handleUpdateItem(e, item.id)} fullWidth size="small" name="name" label="Name" value={item.name} />
                        </BodyTableCell>

                        <BodyTableCell>
                          <AppTextField onChange={e => handleUpdateItem(e, item.id)} name="qty" type="number" size="small" label="Qty" value={item.qty} />
                        </BodyTableCell>

                        <BodyTableCell>
                          <AppTextField onChange={e => handleUpdateItem(e, item.id)} name="price" type="number" size="small" label="Price" value={item.price} />
                        </BodyTableCell>

                        <BodyTableCell>
                          ${item.qty * item.price}.00
                        </BodyTableCell>

                        <BodyTableCell>
                          <IconButton onClick={() => handleDeleteItem(item.id)}>
                            <Delete sx={{
                          color: "text.disabled"
                        }} />
                          </IconButton>
                        </BodyTableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </Scrollbar>
            </Box>

            <Divider />

            <Box my={2}>
              <Grid container spacing={3}>
                <Grid item lg={8} md={7} xs={12}>
                  <ButtonBase onClick={handleAddItem} sx={{
                  color: "primary.main",
                  fontWeight: 600
                }}>
                    Add Item
                  </ButtonBase>
                </Grid>
                <Grid item lg={4} md={5} xs={12}>
                  <Stack spacing={2}>
                    <FlexBetween>
                      <H5>Subtotal</H5>
                      <H5>$ {getSubTotal()}</H5>
                    </FlexBetween>

                    <FlexBetween>
                      <H5>VAT</H5>
                      <H5>$ 0.00</H5>
                    </FlexBetween>

                    <FlexBetween>
                      <H5>Discount</H5>
                      <H5>$ 0.00</H5>
                    </FlexBetween>

                    <Divider />

                    <FlexBetween>
                      <H5>Total</H5>
                      <H5>$ {getSubTotal()}</H5>
                    </FlexBetween>
                  </Stack>
                </Grid>
              </Grid>
            </Box>

            <Box py={2}>
              <H5 mb={2}>Notes</H5>
              <AppTextField multiline fullWidth rows={2} placeholder="Thanks" />
            </Box>
          </Card>
        </Grid>

        <Grid item md={4} xs={12}>
          <Card sx={{
          padding: 2
        }}>
            <H5 mb={2}>Currency</H5>
            <AppTextField fullWidth select SelectProps={{
            native: true,
            IconComponent: KeyboardArrowDown
          }}>
              <option value="usd">USD</option>
              <option value="euro">Euro</option>
              <option value="taka">Taka</option>
            </AppTextField>

            <Divider sx={{
            mt: 3,
            mb: 1
          }} />

            <Stack spacing={1}>
              <FlexBetween>
                <H5>Payment Method</H5>
                <Switch defaultChecked />
              </FlexBetween>

              <FlexBetween>
                <H5>Late Fees</H5>
                <Switch />
              </FlexBetween>

              <FlexBetween>
                <H5>Notes</H5>
                <Switch />
              </FlexBetween>
            </Stack>

            <Divider sx={{
            my: 1
          }} />

            <Stack direction="row" spacing={2} py={2}>
              <Button variant="outlined" fullWidth>
                Preview
              </Button>
              <Button variant="outlined" fullWidth>
                Download
              </Button>
            </Stack>

            <Button fullWidth variant="contained" startIcon={<Send sx={{
            fontSize: "15px !important"
          }} />}>
              Send Invoice
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>;
};

export default CreateInvoice;