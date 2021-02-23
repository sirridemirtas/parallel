import { Dropdown } from "../"
import {
	HeartFill,
	ShieldCheckmark,
	Location,
	Heart
} from "../../icons"
import {
	Button,
	Checkbox,
	IconButton,
	InputGroup,
	Select,
	Table,
	TextField,
	RadioButton
} from "../../ui"

function Customer({ children, className }) {
	return (
		<div style={{
			padding: "20px",
			display: "inline-flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "center",
			gap: "10px"
		}}>
			{/* <Button onClick={() => toggleModal()}>Modal</Button>
			<Modal visibility={modalVisibility}>
				<ModalTitle>Modal Title</ModalTitle>
				<ModalContent>
					Lorem ipsum dolor sit amet consectetur adipisicing.
				</ModalContent>
				<ModalActions>
					<ModalButton onClick={() => toggleModal()}>kapat</ModalButton>
				</ModalActions>
			</Modal>

			<Button onClick={() => toggleConfirm()}>CONFIRM</Button>
			<ConfirmBox
				visibility={confirmVisibility}
				onClosed={() => toggleConfirm()}
				onConfirm={() => "karpuz"}
				title="Title of Confirm"
				body="Are you sure you want to delete this customer?"
				acceptLabel="SİL"
				cancelLabel="İPTAL"
			/> */}

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

			<Select options={[
				{
					text: "Option",
					value: "option 1"
				},
				{
					text: "Option 2",
					value: "option 2"
				},
				{
					text: "Option 3",
					value: "option 3",
					//selected: true
				}
			]} />

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
			<div>
				<div className="story">
					<Button size="small">small</Button>
					<Button>default</Button>
					<Button size="large">large</Button>
				</div>
				<br />
				<div className="story">
					<Button>DEFAULT</Button>
					<Button variant="outlined">OUTLINED</Button>
					<Button variant="text">TEXT</Button>
				</div>
				<br />
				<div className="story">
					<Button><Heart />DEFAULT</Button>
					<Button variant="outlined"><Heart />OUTLINED</Button>
					<Button variant="text"><Heart />TEXT</Button>
				</div>
				<br />
				<div className="story">
					<Button color="blue">blue</Button>
					<Button color="green">green</Button>
					<Button color="indigo">indigo</Button>
					<Button color="orange">orange</Button>
					<Button color="pink">pink</Button>
					<Button color="purple"><Heart />purple</Button>
					<Button color="red">red</Button>
					<Button color="tealBlue"><Heart />teal</Button>
					<Button color="yellow"><Heart />yellow</Button>
					<Button color="black"><Heart />black</Button>
				</div>
				<br />
				<div className="story">
					<Button variant="outlined" color="blue">blue</Button>
					<Button variant="outlined" color="green">green</Button>
					<Button variant="outlined" color="indigo">indigo</Button>
					<Button variant="outlined" color="orange">orange</Button>
					<Button variant="outlined" color="pink">pink</Button>
					<Button variant="outlined" color="purple"><Heart />purple</Button>
					<Button variant="outlined" color="red">red</Button>
					<Button variant="outlined" color="tealBlue"><Heart />teal</Button>
					<Button variant="outlined" color="yellow"><Heart />yellow</Button>
					<Button variant="outlined" color="black"><Heart />black</Button>
				</div>
				<br />
				<div className="story">
					<Button variant="text" color="blue">blue</Button>
					<Button variant="text" color="green">green</Button>
					<Button variant="text" color="indigo">indigo</Button>
					<Button variant="text" color="orange">orange</Button>
					<Button variant="text" color="pink">pink</Button>
					<Button variant="text" color="purple"><Heart />purple</Button>
					<Button variant="text" color="red">red</Button>
					<Button variant="text" color="tealBlue"><Heart />teal</Button>
					<Button variant="text" color="yellow"><Heart />yellow</Button>
					<Button variant="text" color="black"><Heart />black</Button>
				</div>
			</div>
		</div >
	)
}

export default Customer