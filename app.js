const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()
const route = require("./route/route")

app.use("/", route)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});