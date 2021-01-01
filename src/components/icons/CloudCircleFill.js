import * as React from "react"

function SvgCloudCircleFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="cloud-circle-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm70 280H193.05c-31.53 0-57.56-25.58-57-57.11.53-31.74 23.68-49.95 51.35-54.3a7.92 7.92 0 006.16-5C202.07 189.22 223.63 168 256 168c33.17 0 61.85 22.49 70.14 60.21a17.75 17.75 0 0013.18 13.43C357.79 246.05 376 259.21 376 284c0 30.28-22.5 44-50 44z" />
		</svg>
	)
}

export default SvgCloudCircleFill
