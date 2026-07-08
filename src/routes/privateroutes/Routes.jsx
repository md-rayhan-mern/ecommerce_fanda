import Cart from "../../features/cart/cart-page/Index"
import Checkout from "../../features/checkout/checkout-page/Index"
export const PrivateRoutes = [
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];