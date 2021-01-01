import * as React from "react"

function SvgLogoWebComponentFill(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="logo-web-component-fill_svg__ionicon"
			viewBox="0 0 512 512"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				fill="none"
				d="M179.9 388l-76.16-132 76.16 132zm0 0h152.21l76.15-132-76.15-132H179.9l-76.16 132 76.16 132zm-76.16-132l76.16-132-76.16 132z"
			/>
			<path d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376l120-208z" />
			<path d="M179.9 388l-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74l-43.84-76z" />
		</svg>
	)
}

export default SvgLogoWebComponentFill
