const { default: inquirer } = require('inquirer');

const { SVG, Square, Triangle, Circle } = require('./app/lib/shapes');
const { writeFileSync } = require('fs');

function init() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "enter up to 3 characters of text for your SVG",
            validate: function(input) {
                const maxLen = 3;
                if (input.length > maxLen){
                    return "oops you entered too many characters, try again";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter a css color either by keyword or hex"
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter a hex or a css color for the shape"
        },
        {
            type: "list",
            name: "shape",
            message: "Pick a shape for your svg",
            choices: [
                "Square", 
                "Circle", 
                "Triangle"
            ]
        },
        {
            type: "input",
            name: "fileName",
            message: "What should we name this file?"
        }
    ])
    .then((answers) => {
        let shape = null;
        console.log(answers.shape);
        switch (answers.shape){
            case "Square":
                shape = new Square();
                break;
            case "Triangle":
                shape = new Triangle();
                break;
            case "Circle":
                shape = new Circle();
                break;
        }
        shape.addColor(answers.shapeColor);
        const svg = new SVG(shape, answers.text, answers.textColor);
        writeFileSync("./examples/" + answers.fileName + ".svg", svg.render());
        console.log("Generated " + answers.fileName + ".svg");
    })
}
init();