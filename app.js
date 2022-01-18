const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const port = process.env.PORT || 1337;

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
// 	res.json({
// 		message: "tinyURL - short URLs for easy accessibility",
// 	});
// });

// app.get("/url/:id", (req, res) => {
// 	// TODO: get a short url by id
// });

// app.get("/:id", (req, res) => {
// 	// TODO: redirect to url
// });

// app.post("/url", (req, res) => {
// 	// TODO: create a short url
// });

app.listen(port, (req, res) => {
	console.log(`listening on port ${port}`);
});
