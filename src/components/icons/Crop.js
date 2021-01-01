import * as React from "react"

function SvgCrop(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="crop_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M144 48v272a48 48 0 0048 48h272"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				d="M368 304V192a48 48 0 00-48-48H208m160 224v96M144 144H48"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgCrop
