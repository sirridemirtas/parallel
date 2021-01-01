import * as React from "react"

function SvgDice(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="dice_svg__ionicon"
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
				d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M69 153.99l187 110 187-110m-187 310v-200"
			/>
			<ellipse cx={256} cy={152} rx={24} ry={16} />
			<ellipse cx={208} cy={296} rx={16} ry={24} />
			<ellipse cx={112} cy={328} rx={16} ry={24} />
			<ellipse cx={304} cy={296} rx={16} ry={24} />
			<ellipse cx={400} cy={240} rx={16} ry={24} />
			<ellipse cx={304} cy={384} rx={16} ry={24} />
			<ellipse cx={400} cy={328} rx={16} ry={24} />
		</svg>
	)
}

export default SvgDice
