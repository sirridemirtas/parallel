import axios from "axios"
/* export const getCustomer = (id: string) => ({
	method: "get",
	url: `/customers/${id}`
}) */

export const CUSTOMER_ACTIONS = {
	GET: "GET",
	GET_ALL: "GET_ALL",
	CREATE: "CREATE",
	UPDATE: "UPDATE",
	DELETE: "DELETE"
}

export const getCustomer = (id) => ({
	method: "get",
	url: `/customers/${id}`
})

export const getAllCustomers = () => {
	console.log("userServices > getAllCustomers called...")
	return new Promise((resolve, reject) => {
		try {
			axios
				.get("/customers")
				.then((res) => {
					console.log("getAllCustomers > axios res=", res)
					resolve(res.data)
				})
				.catch((err) => {
					console.log("getAllCustomers > axios err=", err)
					reject("Error in getAllCustomers axios!")
				})
		} catch (error) {
			console.error("in userServices > getAllCustomers, Err===", error)
			reject(SYSTEM_ERROR)
		}
	})
}