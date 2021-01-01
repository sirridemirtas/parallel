import * as React from "react"

function SvgCheckmarkDone(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="checkmark-done_svg__ionicon"
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
				d="M464 128L240 384l-96-96m0 96l-96-96m320-160L232 284"
			/>
		</svg>
	)
}

export default SvgCheckmarkDone
