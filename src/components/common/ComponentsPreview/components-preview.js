import React from "react"
import Button from "../../../components/ui/Button"
import { HeartFill, ShieldCheckmark, Location } from "../../../components/icons"
import IconButton from "../../../components/ui/IconButton"
import TextField from "../../../components/ui/TextField"
import InputGroup from "../../../components/ui/InputGroup"
import Checkbox from "../../ui/Checkbox"
import RadioButton from "../../ui/RadioButton"
import Table from "../../ui/Table/table"
import Dropdown from "../Dropdown/dropdown"

function Customer({ children, className, ...props }) {

	return (
		<div style={{
			padding: "20px",
			display: "inline-flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "center",
			gap: "10px"
		}}>

			<InputGroup items={[
				<Button key="1" variant={"outlined"}><Location />Deneme 1</Button>,
				<Button key="2" variant={"outlined"} color="red"><HeartFill />Deneme 1</Button>,
				<TextField key="3" placeholder="textField" />,
				<Button key="4" variant={"outlined"}>Deneme 3</Button>
			]} />

			<TextField placeholder="textField"
				type="email"
				required
				label={"e-mail"}
				color={"blue"}
			/>

			<Dropdown
				align="bottomRight"
				button={<Button onClick={() => console.log("elma")}>Dropdown</Button>}
				items={[
					{
						text: "Anasayfa",
						icon: <ShieldCheckmark />,
						href: "/customers/4"
					},
					{
						text: "Müşteriler",
						icon: <Location />
					},
					{
						text: "Müşteri Grupları",
						icon: <HeartFill />
					}
				]}
			/>

			<Table />

			<RadioButton name="aa" color={"green"} value="222">Radio Button</RadioButton>
			<RadioButton name="aa" value="22qww2">Deneme</RadioButton>
			<RadioButton name="aa" value="22fvsd2">Example</RadioButton>

			<Checkbox color={"red"}>Checkbox</Checkbox>

			<IconButton icon={<HeartFill />} color="pink" size="small" />
			<IconButton icon={<HeartFill />} color="pink" />
			<IconButton icon={<HeartFill />} color="pink" size="large" />

			<div style={{
				backgroundColor: "#fff", width: "200px", height: "200px",
				fontWeight: "bold", padding: "16px", borderRadius: "10px",
				display: "inline-block", margin: "16px", border: "1px solid var(--gray)"
			}}>
				<div style={{ color: "var(--blue)" }}>lorem ipsum</div>
				<div style={{ color: "var(--green)" }}>lorem ipsum</div>
				<div style={{ color: "var(--indigo)" }}>lorem ipsum</div>
				<div style={{ color: "var(--orange)" }}>lorem ipsum</div>
				<div style={{ color: "var(--pink)" }}>lorem ipsum</div>
				<div style={{ color: "var(--purple)" }}>lorem ipsum</div>
				<div style={{ color: "var(--red)" }}>lorem ipsum</div>
				<div style={{ color: "var(--teal)" }}>lorem ipsum</div>
				<div style={{ color: "var(--yellow)" }}>lorem ipsum</div>
			</div>

			<div style={{
				backgroundColor: "#000", width: "200px", height: "200px",
				fontWeight: "bold", padding: "16px", borderRadius: "10px",
				display: "inline-block", margin: "16px", border: "1px solid var(--gray)"
			}}>
				<div style={{ color: "var(--blue-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--green-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--indigo-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--orange-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--pink-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--purple-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--red-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--teal-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--yellow-on-dark)" }}>lorem ipsum</div>
			</div >

			<div style={{
				backgroundColor: "#fff", width: "200px", height: "200px",
				fontWeight: "bold", padding: "16px", borderRadius: "10px",
				display: "inline-block", margin: "16px", border: "1px solid var(--gray)"
			}}>
				<div style={{ color: "var(--gray)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-2)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-3)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-4)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-5)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-6)" }}>lorem ipsum</div>
			</div >

			<div style={{
				backgroundColor: "#000", width: "200px", height: "200px",
				fontWeight: "bold", padding: "16px", borderRadius: "10px",
				display: "inline-block", margin: "16px", border: "1px solid var(--gray)"
			}}>
				<div style={{ color: "var(--gray-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-2-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-3-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-4-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-5-on-dark)" }}>lorem ipsum</div>
				<div style={{ color: "var(--gray-6-on-dark)" }}>lorem ipsum</div>
			</div >
		</div >
	)
}

export default Customer