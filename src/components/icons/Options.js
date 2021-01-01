import * as React from "react"

function SvgOptions(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="options_svg__ionicon"
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
				d="M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"
			/>
			<circle
				cx={336}
				cy={128}
				r={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={176}
				cy={256}
				r={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={336}
				cy={384}
				r={32}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgOptions
