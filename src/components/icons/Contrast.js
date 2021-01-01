import * as React from "react"

function SvgContrast(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="contrast_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={256}
				cy={256}
				r={208}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48z" />
		</svg>
	)
}

export default SvgContrast
