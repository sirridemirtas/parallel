export default function isTurkishId(a) {
	let c = String(a)
	if (!c.match(/^[0-9]{11}$/)) {
		return false
	}
	let n = parseInt(c.substr(0, 1))
	if (n === 0) {
		return true
	}
	let T = parseInt(c.substr(1, 1))
	let u = parseInt(c.substr(2, 1))
	let r = parseInt(c.substr(3, 1))
	let k = parseInt(c.substr(4, 1))
	let i = parseInt(c.substr(5, 1))
	let f = parseInt(c.substr(6, 1))
	let d = parseInt(c.substr(7, 1))
	let b = parseInt(c.substr(8, 1))
	let g = parseInt(c.substr(9, 1))
	let e = parseInt(c.substr(10, 1))
	if (
		(10 - (((n + u + k + f + b) * 3 + T + r + i + d) % 10)) % 10 !== g ||
		(10 - (((T + r + i + d + g) * 3 + n + u + k + f + b) % 10)) % 10 !== e
	) {
		return false
	}
	return true
}