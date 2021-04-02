export const getPayment = (paymentId) => ({
	method: "GET",
	url: `/payments/${paymentId}`
})

export const getPayments = (params) => ({
	method: "GET",
	url: `/payments`,
	params: params
})

export const createPayment = (params, data) => ({
	method: "POST",
	url: `/payments`,
	data: data,
	params: params
})

export const updatePayment = (paymentId, data) => ({
	method: "PUT",
	url: `/payments/${paymentId}`,
	data: data
})

export const deletePayment = (paymentId) => ({
	method: "DELETE",
	url: `/payments/${paymentId}`
})