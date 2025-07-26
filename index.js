const express = require('express'); //express is a framework of node, used in backed
const app = express(); //actual way to access website, kinda like a server but in app form
const PORT = 3000; //defines what port the backend will run on

//Objects stored in JSON(JavaScript Object Notation) format - behave like dictionaries in python - key-value pairs
const items = [
  { reg : 98 , name : "Aarav" , gender : 'M'},
  { reg : 69 , name : "Lehan" , gender : 'F'},
  { reg : 106 , name : "Suvan" , gender : 'M'}
];

//accepts the request from website when it is launched and returns ítems'JSON object as a response
app.get('/items', (req, res) => { res.json(items); } );

//starts the webpage and allows it make requests to backend via the API
app.listen(PORT, () => { console.log( `Server is not fucking up but instead doing some shi on http://localhost:${PORT}` ); } );
