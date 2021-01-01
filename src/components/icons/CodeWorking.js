import * as React from "react"

function SvgCodeWorking(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="code-working_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx={256} cy={256} r={26} />
			<circle cx={346} cy={256} r={26} />
			<circle cx={166} cy={256} r={26} />
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M160 368L32 256l128-112m192 224l128-112-128-112"
			/>
		</svg>
	)
}

export default SvgCodeWorking
