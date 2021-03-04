export const routes = {
	CUSTOMERS: "/customers",
	CUSTOMER: "/customers/:customerId",

	CUSTOMER_ACCOUNT: "/customers/:customerId/accounts/:accountId",
	CUSTOMER_PAYMENTS: "/customers/:customerId/payments",
	CUSTOMER_ORDERS: "/customers/:customerId/orders",

	CUSTOMER_GROUPS: "/customers/groups",
	CUSTOMER_GROUP: "/customers/groups/:groupId",

	PRODUCTS: "/products",
	PRODUCT: "/products/:productId",

	REPORTS: "/reports",
	REPORTS_DAILY: "/reports/daily",
	REPORTS_MONTHLY: "/reports/monthly",
	REPORTS_YEARLY: "/reports/yearly",
}