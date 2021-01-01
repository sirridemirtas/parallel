import * as React from "react"

function SvgPencilFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="pencil-fill_svg__ionicon"
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
				strokeWidth={44}
				d="M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zm54.45-54.44l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z"
			/>
		</svg>
	)
}

export default SvgPencilFill
