import * as React from "react"

function SvgGift(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="gift_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M256 104v56h56a56 56 0 10-56-56zm0 0v56h-56a56 56 0 1156-56z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<rect
				x={64}
				y={160}
				width={384}
				height={112}
				rx={32}
				ry={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272m160-112v304"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgGift
