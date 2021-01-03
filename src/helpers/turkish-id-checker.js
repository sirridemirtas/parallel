export const isTurkishId = (a) => {
	var c = String(a);
	if (!c.match(/^[0-9]{11}$/)) {
		return false;
	}
	var n = parseInt(c.substr(0, 1));
	if (n === 0) {
		return true;
	}
	var m = parseInt(c.substr(1, 1));
	var l = parseInt(c.substr(2, 1));
	var j = parseInt(c.substr(3, 1));
	var i = parseInt(c.substr(4, 1));
	var h = parseInt(c.substr(5, 1));
	var f = parseInt(c.substr(6, 1));
	var d = parseInt(c.substr(7, 1));
	var b = parseInt(c.substr(8, 1));
	var g = parseInt(c.substr(9, 1));
	var e = parseInt(c.substr(10, 1));
	if (
		(10 - (((n + l + i + f + b) * 3 + m + j + h + d) % 10)) % 10 !== g ||
		(10 - (((m + j + h + d + g) * 3 + n + l + i + f + b) % 10)) % 10 !== e
	) {
		return false;
	}
	return true;
}