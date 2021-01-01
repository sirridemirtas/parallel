import * as React from "react"

function SvgBan(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ban_svg__ionicon"
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
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M108.92 108.92l294.16 294.16"
			/>
		</svg>
	)
}

export default SvgBan
