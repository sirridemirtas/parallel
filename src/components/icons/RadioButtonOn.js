import * as React from "react"

function SvgRadioButtonOn(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="radio-button-on_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<circle cx={256} cy={256} r={144} />
		</svg>
	)
}

export default SvgRadioButtonOn
