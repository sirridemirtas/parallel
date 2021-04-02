export const getProduct = (productId) => ({
	method: "GET",
	url: `/products/${productId}`
})

export const getAllProducts = (params) => ({
	method: "GET",
	url: `/products`,
	params: params
})

export const findProducts = getAllProducts

export const createProduct = (data) => ({
	method: "POST",
	url: `/products`,
	data: data
})

export const updateProduct = (id, data) => ({
	method: "PUT",
	url: `/products/${id}`,
	data: data
})

export const deleteProduct = (id) => ({
	method: "DELETE",
	url: `/products/${id}`
})