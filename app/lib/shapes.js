class Shape {
    constructor(html, shapeColor){
        this.html = html;
        this.shapeColor = shapeColor;
    }
    addColor(color){
        this.shapeColor = color;
    }
    render(){
        return this.html.replace("%s", this.shapeColor)
    }
}
class Triangle extends Shape {
    constructor(){
        const html = '<polygon points="150, 18 244, 182 56, 182" fill="%s" />';
        const shapeColor = "white";
        super(html, shapeColor);
    }
}
class Circle extends Shape {
    constructor(){
        const html = '<circle cx="100" cy="100" r="80" fill="%s" />';
        const shapeColor = "white";
        super(html, shapeColor);
    }
}
class Square extends Shape {
    constructor(){
        const html = '<rect x="10" y="10" width="200" height="100" fill="%s" />';
        const shapeColor = "white";
        super(html, shapeColor);
    }
}
class SVG {
    constructor(shape, text, textColor){
        this.shape = shape;
        this.text = text;
        this.textColor = textColor
    }
    renderText(){
        return `<text x="75" y="100" font-size="2em" fill="${this.textColor}">${this.text}</text>`
    }
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        ${this.renderText()}
        </svg>
        `
    }
}

module.exports = { SVG, Triangle, Circle, Square };