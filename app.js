var pdf = require("pdf-creator-node");
var fs = require("fs");

var html = fs.readFileSync("template.html", "utf8");

var document = {
    html: html,
    data: {
        name: "Demo Title",
        cust_name: "Hina Chauhan",
        image:
            "https://f1.pngfuel.com/png/993/127/716/check-mark-icon-icon-design-pictogram-symbol-line-logo-png-clip-art.png",
    },
    path: "./output.pdf",
};

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
};

pdf.create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });
