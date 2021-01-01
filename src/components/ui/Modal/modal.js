import React from "react"
import cn from "classnames"
import styles from "./modal.module.css"
import Button from "../Button"

export const ModalTitle = ({ children, ...props }) => (
	<div className={styles.title} {...props}>
		<span>{children}</span>
	</div>
)

export const ModalContent = ({ children, ...props }) => (
	<div className={styles.content} {...props}>
		{children}
	</div>
)

export const ModalActions = ({ children, ...props }) => (
	<div className={styles.actions} {...props}>
		{children}
	</div>
)

export const ModalButton = ({ children, ...props }) => (
	<Button variant={props.variant || "text"} {...props}>
		{children}
	</Button>
)

function Modal({ children, onOpened, onClosed, visibility = false, ...props }) {

	return (
		<div className={cn(styles.wrapper, props.className, visibility || styles.hide)}
			{...props}>
			<div className={styles.modal} draggable="true">
				{children}
			</div>
		</div>
	)
}

export default Modal