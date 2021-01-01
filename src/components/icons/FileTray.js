import * as React from "react"

function SvgFileTray(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="file-tray_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z"
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
				d="M48 272h144m128 0h144m-272 0a64 64 0 00128 0"
			/>
		</svg>
	)
}

export default SvgFileTray
