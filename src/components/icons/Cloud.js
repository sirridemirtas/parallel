import * as React from "react"

function SvgCloud(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="cloud_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88z"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgCloud