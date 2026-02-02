# Product Management Workflow

## 1. Backend Implementation
- **Model**: `src/models/Product.js` (name, image, description, brand, category, price, countInStock, rating, numReviews).
- **Controller**:
    - `getProducts`: Fetch with pagination and keyword search.
    - `getProductById`: Fetch single product.
    - `createProduct` (Admin): Create new product.
    - `updateProduct` (Admin): Update details.
    - `deleteProduct` (Admin): Remove product.
- **Routes**: public GET routes, private/admin POST/PUT/DELETE routes.

## 2. Frontend Implementation
- **Service**: `src/services/productService.js` (list, details, delete, create, update).
- **Public**:
    - `Home.jsx` / `ProductList.jsx`: Display grid of products. Use `Stitch/product_catalog_with_filters_1`.
    - `ProductDetail.jsx`: Show full info. Use `Stitch/product_details_and_selection_1`.
- **Admin**:
    - `ProductManagement.jsx`: Table view of products with Edit/Delete buttons.
    - Create/Edit Modal or separate page.

## 3. Stitch Integration
- **Card Component**: Extract the product card HTML from Stitch to `src/components/ProductCard.jsx`.
- **Filters**: Implement filter logic (Category, Price) matching the Stitch UI.
