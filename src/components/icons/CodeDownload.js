import * as React from "react"

function SvgCodeDownload(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="code-download_svg__ionicon"
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
				d="M160 368L32 256l128-112m192 224l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03"
			/>
		</svg>
	)
}

export default SvgCodeDownload
