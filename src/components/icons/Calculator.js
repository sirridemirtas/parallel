import * as React from "react"

function SvgCalculator(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="calculator_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={112}
				y={48}
				width={288}
				height={416}
				rx={32}
				ry={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M160.01 112H352v64H160.01z"
			/>
			<circle cx={168} cy={248} r={24} />
			<circle cx={256} cy={248} r={24} />
			<circle cx={344} cy={248} r={24} />
			<circle cx={168} cy={328} r={24} />
			<circle cx={256} cy={328} r={24} />
			<circle cx={168} cy={408} r={24} />
			<circle cx={256} cy={408} r={24} />
			<rect x={320} y={304} width={48} height={128} rx={24} ry={24} />
		</svg>
	)
}

export default SvgCalculator