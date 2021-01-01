import * as React from "react"

function SvgShareSocial(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="share-social_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<circle
				cx={128}
				cy={256}
				r={48}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={384}
				cy={112}
				r={48}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<circle
				cx={384}
				cy={400}
				r={48}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"
			/>
		</svg>
	)
}

export default SvgShareSocial
