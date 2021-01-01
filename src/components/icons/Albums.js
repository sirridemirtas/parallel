import * as React from "react"

function SvgAlbums(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="albums_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<rect
				x={64}
				y={176}
				width={384}
				height={256}
				rx={28.87}
				ry={28.87}
				fill="none"
				stroke="currentColor"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M144 80h224m-256 48h288"
			/>
		</svg>
	)
}

export default SvgAlbums
