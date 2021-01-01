import * as React from "react"

function SvgContractFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="contract-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M304 416V304h112m-101.8 10.23L432 432M208 96v112H96m101.8-10.23L80 80m336 128H304V96m10.23 101.8L432 80M96 304h112v112m-10.23-101.8L80 432"
			/>
		</svg>
	)
}

export default SvgContractFill
