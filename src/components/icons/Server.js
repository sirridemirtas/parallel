import * as React from "react"

function SvgServer(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="server_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<ellipse
				cx={256}
				cy={128}
				rx={192}
				ry={80}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				d="M448 214c0 44.18-86 80-192 80S64 258.18 64 214m384 86c0 44.18-86 80-192 80S64 344.18 64 300"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
			<path
				d="M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</svg>
	)
}

export default SvgServer
