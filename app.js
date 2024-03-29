require("dotenv").config()
const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()
const route = require("./route/route")

app.use(require('cors')())
app.use(express.json())

app.use("/", route.export())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});