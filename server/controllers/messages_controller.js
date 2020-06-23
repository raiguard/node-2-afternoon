let messages = [];
let nextMessageId = 0;

module.exports = {
  create: (req, res) => {
    messages.push({ id: nextMessageId, ...req.body });
    nextMessageId++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const id = +req.params.id;
    const index = messages.findIndex((message) => message.id === id);
    if (messages[index]) {
      messages[index].text = req.body.text;
    }
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const id = +req.param.id;
    const index = messages.findIndex((message) => message.id === id);
    if (index) {
      messages.splice(index, 1);
    }
    res.status(200).send(messages);
  }
};
