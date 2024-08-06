# Lord of the Rings Character API
This Node.js application provides a simple API for managing characters from the Lord of the Rings universe. Currently, the data is stored in a Subabase database.

## Prerequisites

Before getting started, make sure you have the following:

- Node.js and npm (or yarn) installed.
- A code editor, IDE, or access to a terminal.

## Installation

To install the application, follow these steps:

1. Clone the repository by running `git clone https://github.com/TimothyRedPanda/Timothy-API` in your terminal.
2. Navigate to the project directory by running `cd Timothy-API`.
3. Install the dependencies by running `npm install` or `yarn install`.

## Configuration

To configure the application, do the following:

1. Rename the `.env.example` file to `.env`.

2) Login to [Supabase](https://www.supabase.com).

3) Click on the project you are going to add your table to and navigate to the settings in the left hand menu.

4) API: click on "API", here you will find your `API URL` and `anon` key (public API key).

You can then update your `.env` file like this -

```env
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
```

## Setting up the Supabase Table

To set up your own Supabase table, follow these steps:

1) Open Supabase: navigate to your project.

2) SQL Editor: go to the SQL Editor from the left-hand menu.

3) Create Table: enter the below SQL command to create the same table structure as I have used.


```sql
CREATE TABLE characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  firstname TEXT,
  lastname TEXT,
  dob TEXT
);
```

## Running the Server

To start the server, follow these steps:

1. Run `npm run nodemon` or `yarn run nodemon` in your terminal.

2. The server will be listening on port `3000` (see `const port = 3000` in `server.js`).

3. Therefore you need to send your HTTP requests to - http://localhost:3000/lotr/characters (Brief explanation of the different methdos below).

## How to Use the API

The API supports the following HTTP methods:

- **GET**: To retrieve all characters, send a GET request to the server. You can also add query parameters like `firstName`, `lastName`, or `id` to filter the results.
- **POST**: To create a new character, send a POST request to the server with the character's `firstName`, `lastName`, and `DOB` provided in the request body.
- **PUT**: To update an existing character, send a PUT request to the server with the character's `id` in the URL path and the updated details (`firstName`, `lastName`, `DOB`) in the request body. Only the properties you provide will be updated.
- **DELETE**: To delete a character, send a DELETE request to the server with the character's `id` in the URL path.

For more details on how to use these methods, refer to the `server.js` file.