import { isTurkishId } from "../../../helpers"
import { TextField } from "../../ui"

function InputTurkishId({ props }) {
	const handleInput = (event) => {
		if (!isTurkishId(event.target.value)) {
			event.target.setCustomValidity("Geçersiz TC Kimlik Numarası!")
		} else {
			event.target.setCustomValidity("")
		}
		if (!event.target.value.length && !event.target.hasAttribute("required")) {
			event.target.setCustomValidity("")
		}
	}

	return (
		<TextField
			name="turkishId"
			type="text"
			placeholder="TC Kimlik No"
			minLength="11" maxLength="11"
			pattern="[1-9][0-9]{9}[02468]"
			onInput={(event) => handleInput(event)}
			{...props}
		/>
	)
}

export default InputTurkishId