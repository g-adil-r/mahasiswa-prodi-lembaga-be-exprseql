const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()
const route = require("./route/route")

app.use("/", )

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});
app.get('/', (req, res) => {
  res.send("This is root!")
})