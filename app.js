import express from "express"

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("helllooo world im here ....");
    console.log("server is started");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
