import * as React from "react"

function SvgLink(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="link_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M208 352h-64a96 96 0 010-192h64m96 0h64a96 96 0 010 192h-64m-140.71-96h187.42"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={36}
			/>
		</svg>
	)
}

export default SvgLink
