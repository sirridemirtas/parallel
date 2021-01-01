import * as React from "react"

function SvgMenuFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="menu-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={48}
				d="M88 152h336M88 256h336M88 360h336"
			/>
		</svg>
	)
}

export default SvgMenuFill
