import * as React from "react"

function SvgLogoFigmaFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="logo-figma-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z" />
			<circle cx={336} cy={256} r={80} />
		</svg>
	)
}

export default SvgLogoFigmaFill
