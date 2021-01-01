import * as React from "react"

function SvgColorWand(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="color-wand_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
				x={280.48}
				y={122.9}
				width={63.03}
				height={378.2}
				rx={31.52}
				transform="rotate(-45 312.002 311.994)"
			/>
			<path d="M178.38 178.38a31.64 31.64 0 000 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 00-44.75 0z" />
			<path
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
				strokeLinecap="round"
				d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48m101.82-5.82l-33.94 33.94M124.12 259.88l-33.94 33.94"
			/>
		</svg>
	)
}

export default SvgColorWand
