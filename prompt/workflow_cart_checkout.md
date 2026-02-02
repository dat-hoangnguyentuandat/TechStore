# Cart & Checkout Workflow

## 1. Cart (Frontend)
- **State**: `src/context/cartContext.jsx` (items, addToCart, removeFromCart, savePaymentMethod, saveShippingAddress).
- **Persistence**: Save cart items to `localStorage`.
- **Page**: `Cart.jsx`.
    - Use `Stitch/shopping_cart_and_quantity_update_1`.
    - Map "Remove" button and Qty selector to context functions.
    - "Proceed to Checkout" button checks if user is logged in.

## 2. Checkout (Frontend)
- **Steps**:
    1. **Shipping**: Input Name, Address, City, Postal Code, Country.
    2. **Payment**: Select Method (PayPal, Credit Card, COD).
    3. **Place Order**: Review items and total -> Call API.
- **Design**: Use `Stitch/checkout_and_cod_payment_1`.

## 3. Order (Backend)
- **Model**: `src/models/Order.js` (user, orderItems, shippingAddress, paymentMethod, taxPrice, shippingPrice, totalPrice, isPaid, isDelivered).
- **Controller**:
    - `addOrderItems`: Validate items -> Save Order -> Return Order.
    - `getOrderById`: For tracking.
    - `updateOrderToPaid`: On payment success.
- **Logic**: Ensure stock is checked/decremented (optional for MVP).
