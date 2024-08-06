# Lord of the Rings Character API
This Node.js application provides a simple API for managing characters from the Lord of the Rings universe. Currently, the data is stored in a Subabase database.

## Prerequisites

Before getting started, make sure you have the following:

* Node.js and npm (or yarn) installed.
* A code editor, IDE, or access to a terminal.

## Installation

To install the application, follow these steps:

1. Clone the repository by running `git clone https://github.com/TimothyRedPanda/Timothy-API` in your terminal.
2. Navigate to the project directory by running `cd Timothy-API`.
3. Install the dependencies by running `npm install` or `yarn install`.

## Configuration

To configure the application, do the following:

1. Rename the `.env.example` file to `.env`.
2. Update the necessary environment variables in the `.env` file.

## Running the Server

To start the server, follow these steps:

1. Run `npm run nodemon` or `yarn run nodemon` in your terminal.
2. The server will be listening on port `3000` (see `const port = 3000` in `server.js`).

## How to Use the API

The API supports the following HTTP methods:

* **GET**: To retrieve all characters, send a GET request to the server. You can also add query parameters like `firstName`, `lastName`, or `id` to filter the results.
* **POST**: To create a new character, send a POST request to the server with the character's `firstName`, `lastName`, and `DOB` provided in the request body.
* **PUT**: To update an existing character, send a PUT request to the server with the character's `id` in the URL path and the updated details (`firstName`, `lastName`, `DOB`) in the request body. Only the properties you provide will be updated.
* **DELETE**: To delete a character, send a DELETE request to the server with the character's `id` in the URL path.

For more details on how to use these methods, refer to the `server.js` file.