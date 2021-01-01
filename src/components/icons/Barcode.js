import * as React from "react"

function SvgBarcode(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="barcode_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M384 400.33l35.13-.33A29 29 0 00448 371.13V140.87A29 29 0 00419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400m256-208v128m-64-160v192m-64-176v160m-64-176v192m-64-160v128"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgBarcode
