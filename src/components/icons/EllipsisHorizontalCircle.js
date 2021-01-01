import * as React from "react"

function SvgEllipsisHorizontalCircle(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ellipsis-horizontal-circle_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={256} cy={256} r={26} />
			<circle cx={346} cy={256} r={26} />
			<circle cx={166} cy={256} r={26} />
			<path
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgEllipsisHorizontalCircle
