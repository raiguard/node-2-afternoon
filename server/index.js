const express = require("express");
const app = express();

const messagesController = require("./controllers/messages_controller");

app.use(express.json());

app.use(express.static("./public/build"));

app.post("/api/messages", messagesController.create);
app.get("/api/messages", messagesController.read);
app.put("/api/messages/:id", messagesController.update);
app.delete("/api/messages/:id", messagesController.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
