import * as React from "react"

function SvgPin(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="pin_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={256}
				cy={96}
				r={64}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path d="M272 164a9 9 0 00-9-9h-14a9 9 0 00-9 9v293.56a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38z" />
			<circle cx={280} cy={72} r={24} />
		</svg>
	)
}

export default SvgPin
