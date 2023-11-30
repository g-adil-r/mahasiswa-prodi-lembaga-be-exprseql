const { default: RouteGroup } = require('express-route-grouping');
const root = new RouteGroup('/', require('express').Router()) 

root.group("/hello", hello => {
    hello.get("/", (req, res) => {
        return res.send("Hi!")
    })

    hello.get("/ye", (req, res) => {
        return res.send("Sup ye!")
    })
})

module.exports = root;