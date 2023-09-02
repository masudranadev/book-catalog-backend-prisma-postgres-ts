# Book Catalog Backend

## User
api/v1/auth/signup (POST)
api/v1/auth/signin (POST)
api/v1/users (GET) Get All Users → Only Allowed For Admin
api/v1/users/:id (GET) Get a Single User → Only Allowed For Admin
api/v1/users/:id (PATCH) Update a Single User → Only Allowed For Admin
api/v1/users/:id (DELETE) Delete a User → Only Allowed For Admin
api/v1/profile (GET) Get User Profile Data → Only for specific user (customer and admin)

## Category
api/v1/categories/create-category (POST) → Only Allowed For Admin
api/v1/categories (GET) 
api/v1/categories/:id (Single GET) Include an id that is saved in your database
api/v1/categories/:id (PATCH) Update a Category → Only Allowed For Admin
api/v1/categories/:id (DELETE) Delete a Category → Only Allowed For Admin

## Books
api/v1/books/create-book (POST) → Only Allowed For Admin
api/v1/books (GET) 
api/v1/books/:categoryId/category (GET)
api/v1/books/:id (GET)
api/v1/books/:id (PATCH) Update a Single Book → Only Allowed For Admin
api/v1/books/:id (DELETE) Delete a book → Only Allowed for admins
## Orders
api/v1/orders/create-order (POST) Create Order → Only Allowed For Customer
api/v1/orders (GET) Get all Order → Only Allowed For Admins
api/v1/orders (GET) Get all Order for specific Customers → Only Specific Customers
api/v1/orders/:orderId (GET) Get single order by Id → Only for specific customer and admins