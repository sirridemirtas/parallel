import * as React from "react"

function SvgRadio(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="radio_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={256} cy={256.02} r={32} />
			<path
				d="M184.25 192.25a96 96 0 000 127.52m143.52 0a96 96 0 000-127.52m-194.49-50.97a168 168 0 000 229.44m245.44 0a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgRadio
