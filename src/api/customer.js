export const getCustomer = (customerId) => ({
	method: "GET",
	url: `/customers/${customerId}`
})

export const getAllCustomers = (params) => ({
	method: "GET",
	url: `/customers`,
	params: params
})

export const findCustomers = getAllCustomers

export const createCustomer = (data) => ({
	method: "POST",
	url: `/customers`,
	data: data
})

export const updateCustomer = (id, data) => ({
	method: "PUT",
	url: `/customers/${id}`,
	data: data
})

export const deleteCustomer = (id) => ({
	method: "DELETE",
	url: `/customers/${id}`
})