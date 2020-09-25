exports.index = (req, res) => {
    res.render("index.hbs", {
        title : "Test Task",
        style : "/master.css",
        script : "/main.js"
    })
}