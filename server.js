import { v4 as uuidv4 } from "uuid";
import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY,
);

app.use(express.json());

app.listen(port, () => {
	console.log(
		`Server is running on port http://localhost:${port}/lotr/characters`,
	);
});

// GET request to fetch characters
app.get("/lotr/characters", async (req, res) => {
	const { firstName, lastName, DOB, id } = req.query;
	let query = supabase.from("characters").select("*");

	if (firstName) query = query.eq("firstName", firstName);
	if (lastName) query = query.eq("lastName", lastName);
	if (DOB) query = query.eq("DOB", DOB);
	if (id) query = query.eq("id", id);

	const { data, error } = await query;

	if (error) {
		res.status(500).send(error.message);
	} else {
		res.status(200).send(data);
	}
});

// POST request to add a new character
app.post("/lotr/characters", async (req, res) => {
	const { firstName, lastName, DOB } = req.body;

	if (!firstName || !lastName || !DOB) {
		res.status(418).send("Please provide a first name, last name, and DOB");
	} else {
		const newCharacter = {
			id: uuidv4(),
			firstName,
			lastName,
			DOB,
		};

		const { data, error } = await supabase
			.from("characters")
			.insert([newCharacter]);

		if (error) {
			res.status(500).send(error.message);
		} else {
			res.status(201).send(data);
		}
	}
});

// PUT request to update a character
app.put("/lotr/characters/:id", async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, DOB } = req.body;

	if (!firstName || !lastName || !DOB) {
		res.status(418).send("Please provide a first name, last name, and DOB");
	} else {
		const updatedCharacter = {
			id,
			firstName,
			lastName,
			DOB,
		};

		const { data, error } = await supabase
			.from("characters")
			.update(updatedCharacter)
			.eq("id", id);

		if (error) {
			res.status(500).send(error.message);
		} else {
			res.status(200).send(data);
		}
	}
});

// DELETE request to delete a character
app.delete("/lotr/characters/:id", async (req, res) => {
	const { id } = req.params;

	const { data, error } = await supabase
		.from("characters")
		.delete()
		.eq("id", id);

	if (error) {
		res.status(500).send(error.message);
	} else {
		res.status(200).send(data);
	}
});

// PATCH request to update specific fields of a character
app.patch("/lotr/characters/:id", async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, DOB } = req.body;

	const updatedCharacter = {};

	if (firstName) updatedCharacter.firstName = firstName;
	if (lastName) updatedCharacter.lastName = lastName;
	if (DOB) updatedCharacter.DOB = DOB;

	const { data, error } = await supabase
		.from("characters")
		.update(updatedCharacter)
		.eq("id", id);

	if (error) {
		res.status(500).send(error.message);
	} else {
		res.status(200).send(data);
	}
});
