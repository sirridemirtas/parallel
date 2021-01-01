import * as React from "react"

function SvgWine(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="wine_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96zM256 272v160"
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M352 432H160"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M112 160h288"
			/>
		</svg>
	)
}

export default SvgWine
