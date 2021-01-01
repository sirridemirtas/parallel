import React from "react"
import Button from "../components/ui/Button"
import { Favorite } from "../components/icons"

export default {
	title: "Buttons"
}

export const ButtonStory = () => (
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
			<Button><Favorite />DEFAULT</Button>
			<Button variant="outlined"><Favorite />OUTLINED</Button>
			<Button variant="text"><Favorite />TEXT</Button>
		</div>
		<br />
		<div className="story">
			<Button color="blue">blue</Button>
			<Button color="green">green</Button>
			<Button color="indigo">indigo</Button>
			<Button color="orange">orange</Button>
			<Button color="pink">pink</Button>
			<Button color="purple"><Favorite />purple</Button>
			<Button color="red">red</Button>
			<Button color="tealBlue"><Favorite />teal</Button>
			<Button color="yellow"><Favorite />yellow</Button>
			<Button color="black"><Favorite />black</Button>
		</div>
		<br />
		<div className="story">
			<Button variant="outlined" color="blue">blue</Button>
			<Button variant="outlined" color="green">green</Button>
			<Button variant="outlined" color="indigo">indigo</Button>
			<Button variant="outlined" color="orange">orange</Button>
			<Button variant="outlined" color="pink">pink</Button>
			<Button variant="outlined" color="purple"><Favorite />purple</Button>
			<Button variant="outlined" color="red">red</Button>
			<Button variant="outlined" color="tealBlue"><Favorite />teal</Button>
			<Button variant="outlined" color="yellow"><Favorite />yellow</Button>
			<Button variant="outlined" color="black"><Favorite />black</Button>
		</div>
		<br />
		<div className="story">
			<Button variant="text" color="blue">blue</Button>
			<Button variant="text" color="green">green</Button>
			<Button variant="text" color="indigo">indigo</Button>
			<Button variant="text" color="orange">orange</Button>
			<Button variant="text" color="pink">pink</Button>
			<Button variant="text" color="purple"><Favorite />purple</Button>
			<Button variant="text" color="red">red</Button>
			<Button variant="text" color="tealBlue"><Favorite />teal</Button>
			<Button variant="text" color="yellow"><Favorite />yellow</Button>
			<Button variant="text" color="black"><Favorite />black</Button>
		</div>
	</div >
)


