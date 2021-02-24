export const routes = {
	CUSTOMERS: "/customers",
	CUSTOMER: "/customers/:customerId",

	CUSTOMER_ACCOUNT: "/customers/:customerId/accounts/:accountId",
	CUSTOMER_PAYMENTS: "/customers/:customerId/accounts/:accountId/payments",
	CUSTOMER_ORDERS: "/customers/:customerId/accounts/:accountId/orders",

	CUSTOMER_GROUPS: "/customers/groups",
	CUSTOMER_GROUP: "/customers/groups/:groupId",

	PRODUCTS: "/products",
	PRODUCT: "/products/:productId",
}