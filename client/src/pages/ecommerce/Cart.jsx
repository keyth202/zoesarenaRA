import { Box, Grid } from "@mui/material";
import CartListItem from "page-sections/ecommerce/CartListItem";
import OrderSummery2 from "page-sections/ecommerce/OrderSummery2";

const Cart = () => {
  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={7} sm={7} xs={12}>
          {cartList.map((item, index) => <CartListItem key={index} item={item} />)}
        </Grid>

        <Grid item md={5} sm={5} xs={12}>
          <OrderSummery2 />
        </Grid>
      </Grid>
    </Box>;
};

const cartList = [{
  image: "/static/products/shoe-4.png",
  name: "Nike Pro Max 270",
  price: 450,
  stock: 48,
  quantity: 2
}, {
  image: "/static/products/light.png",
  name: "Nike Lamp Light",
  price: 450,
  stock: 48,
  quantity: 1
}, {
  image: "/static/products/chair.png",
  name: "Comfortable Chair",
  price: 450,
  stock: 48,
  quantity: 3
}];
export default Cart;