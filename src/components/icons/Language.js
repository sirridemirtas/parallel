import * as React from "react"

function SvgLanguage(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="language_svg__ionicon"
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
				d="M48 112h288M192 64v48m80 336l96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384"
			/>
			<path
				d="M256 336s-35-27-72-75-56-85-56-85"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgLanguage
