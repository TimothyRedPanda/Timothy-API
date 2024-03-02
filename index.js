import express from "express";
import { v4 as uuidv4 } from "uuid";
import characters from "./data/characters.json" with { type: "json" };

// Add a unique ID to each character
for (const character of characters) {
	character.id = uuidv4();
}

// Save the express function as a variable
const app = express();
app.use(express.json());

// Save the chosen port as a variable
const port = 3000;

//listen to the chosen port
app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});

// Set up a endpoint (route) - In this case a GET request.
app.get("/lotr/characters", (req, res) => {
	// Check if there are query parameters
	if (Object.keys(req.query).length === 0) {
		// If there are no query parameters, return all characters
		res.status(200).send(characters);
	} else {
		// If there are query parameters, save them as variables
		const { firstName, lastName, DOB, id } = req.query;
		// Filter the characters based on the query parameters
		const filteredCharacters = characters.filter(
			(character) =>
				(!firstName || character.firstName === firstName) &&
				(!lastName || character.lastName === lastName) &&
				(!DOB || character.DOB === DOB) &&
				(!id || character.id === id),
		);
		// Return the filtered characters
		res.status(200).send(filteredCharacters);
	}
});

// Set up a endpoint (route) - In this case a POST request.
app.post("/lotr/characters", (req, res) => {
	// Save the request body as a variable
	const { firstName, lastName, DOB } = req.body;
	// Check if the request body contains a first name, last name and DOB
	if (!firstName || !lastName || !DOB) {
		res.status(418).send("Please provide a first name, last name and DOB");
		// If the body contains firstName, lastName and DOB then we POST the new character with a unique ID
	} else {
		const newCharacter = {
			id: uuidv4(),
			firstName,
			lastName,
			DOB,
		};
		characters.push(newCharacter);
		res.status(201).send(newCharacter);
	}
});

// set up a endpoint (route) - In this case a PUT request.
app.put("/lotr/characters/:id", (req, res) => {
	// Save the request body and the id into variables
	const { firstName, lastName, DOB } = req.body;
	const { id } = req.params;
	// Find the character with the id
	const character = characters.find((character) => character.id === id);
	// Check if the character exists
	if (!character) {
		res.status(404).send("Character does not exist");
	} else {
		character.firstName = firstName;
		character.lastName = lastName;
		character.DOB = DOB;
		res.status(200).send(character);
	}
});

// Set up an endpoint (route) - In this case a PATCH request.
app.patch("/lotr/characters/:id", (req, res) => {
	// Save the request body and the id into variables
	const { firstName, lastName, DOB } = req.body;
	const { id } = req.params;
	// Find the character with the id
	const character = characters.find((character) => character.id === id);
	// Check if the character exists
	if (!character) {
		res.status(404).send("Character not found");
	} else {
		// Update the character properties if they are provided in the request body
		if (firstName) {
			character.firstName = firstName;
		}
		if (lastName) {
			character.lastName = lastName;
		}
		if (DOB) {
			character.DOB = DOB;
		}
		res.status(200).send(character);
	}
});

//set up an endpoint (route) - In this case a DELETE request.
app.delete("/lotr/characters/:id", (req, res) => {
	const { id } = req.params;
	const index = characters.findIndex((character) => character.id === id);
	if (index === -1) {
		res.status(404).send("Character not found");
	} else {
		characters.splice(index, 1);
		res.status(200).send("Character deleted");
	}
});

export default app;
