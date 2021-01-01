import * as React from "react"

function SvgSad(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="sad_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={184} cy={232} r={24} />
			<path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 01-7.87 10.17H168.15a8 8 0 01-7.82-10.17C172.32 317.53 210.53 288 256 288z" />
			<circle cx={328} cy={232} r={24} />
			<circle
				cx={256}
				cy={256}
				r={208}
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgSad
