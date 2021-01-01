import * as React from "react"

function SvgReader(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="reader_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={96}
				y={48}
				width={320}
				height={416}
				rx={48}
				ry={48}
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
				d="M176 128h160m-160 80h160m-160 80h80"
			/>
		</svg>
	)
}

export default SvgReader
