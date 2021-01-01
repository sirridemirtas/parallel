import * as React from "react"

function SvgDisc(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="disc_svg__ionicon"
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
			<circle
				cx={256}
				cy={256}
				r={96}
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<circle cx={256} cy={256} r={32} />
		</svg>
	)
}

export default SvgDisc
