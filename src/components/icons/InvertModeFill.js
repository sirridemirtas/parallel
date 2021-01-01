import * as React from "react"

function SvgInvertModeFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="invert-mode-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
				cx={256}
				cy={256}
				r={208}
			/>
			<path d="M256 176v160a80 80 0 000-160zm0-128v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z" />
		</svg>
	)
}

export default SvgInvertModeFill
