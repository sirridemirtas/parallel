export const getAccount = (accountId) => ({
	method: "GET",
	url: `/accounts/${accountId}`
})

export const getAllAccounts = (params) => ({
	method: "GET",
	url: `/accounts`,
	params: params
})

export const createAccount = (data) => ({
	method: "POST",
	url: `/accounts`,
	data: data
})

export const updateAccount = (id, data) => ({
	method: "PUT",
	url: `/accounts/${id}`,
	data: data
})

export const deleteAccount = (id) => ({
	method: "DELETE",
	url: `/accounts/${id}`
})