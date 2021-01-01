import * as React from "react"

function SvgEllipsisVerticalFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ellipsis-vertical-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={256} cy={256} r={48} />
			<circle cx={256} cy={416} r={48} />
			<circle cx={256} cy={96} r={48} />
		</svg>
	)
}

export default SvgEllipsisVerticalFill
