import * as React from "react"

function SvgChevronUpCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="chevron-up-circle_svg__ionicon"
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
				d="M352 296l-96-96-96 96"
			/>
			<path
				d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgChevronUpCircle
