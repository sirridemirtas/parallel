function capitalizeCase(str) {
	return str ? str.split(" ").map(
		w => w[0] ? w[0].toLocaleUpperCase() + w.substr(1) : ""
	).join(" ") : ""
}

export default capitalizeCase