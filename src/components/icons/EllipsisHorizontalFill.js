import * as React from "react"

function SvgEllipsisHorizontalFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ellipsis-horizontal-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={256} cy={256} r={48} />
			<circle cx={416} cy={256} r={48} />
			<circle cx={96} cy={256} r={48} />
		</svg>
	)
}

export default SvgEllipsisHorizontalFill
