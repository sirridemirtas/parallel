import axios from "axios"

const fetch = axios

export const getCustomer = (customerId) => fetch({
	method: "GET",
	url: `/customers/${customerId}`
})

export const getAllCustomers = (params) => fetch({
	method: "GET",
	url: `/customers`,
	params: params
})

export const findCustomers = getAllCustomers

export const createCustomer = (data) => fetch({
	method: "POST",
	url: `/customers`,
	data: data
})

export const updateCustomer = (id, data) => fetch({
	method: "PUT",
	url: `/customers/${id}`,
	data: data
})

export const deleteCustomer = (id) => fetch({
	method: "DELETE",
	url: `/customers/${id}`
})