# Lord of the Rings Character API

This Node.js application provides a simple API for managing characters from the Lord of the Rings universe.
Only one of the best books! Currently, the data is stored in `DATA/characters.json`.

## Prerequisites (stuff you need)

* Node.js and npm (or yarn) installed.
* Code editor, IDE or at least access to a terminal.

## Installation

1. Clone (`git clone https://github.com/TimothyRedPanda/Timothy-API`) down the repo.
2. `cd Timothy-API`
3. Run `npm install` (or `yarn install` for all my yarn friends) to install the dependencies.

## Getting that server up and running

1. Run `node server.js` in the terminal.
2. The server is set to listen on port `3000` (see `const port = 3000` in `server.js`).

## How do you use it?

Currently, this API supports the following HTTP methods:

* GET: Returns all characters. You can always add query parameters like `firstName`, `lastName` or `id`
* POST: Create a new character. Provide their `firstName`, `lastName` and `DOB` in the request body.
* PUT: Update any existing character. Provide their `id` in the URL path and update
  details (`firstName`,`lastName`, `DOB`) in the request body. Only the properties you provide will be updated.
* PATCH: Partially update an existing character. Provide their `id` in the URL path and any properties you want to update (`firstName`, `lastName`, `DOB`) in the request body. Only the provided properties will be updated.
* DELETE: Delete a character. Provide their `id` in the URL path.

## Testing 

1. Open Postman or a similar API testing tool, your choice on which one.
2. Set the URL to `http://localhost:3000/lotr/characters`.
3. Then make requests to your heart's content...that is what the HTTP methods are for!

### Plans 

* Move the data from `DATA/characters.json` to its own database.
* Add user authentication and improved error handling.
* Create a front-end, let's beautify this thing.

