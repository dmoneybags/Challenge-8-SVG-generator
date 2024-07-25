const { SVG, Square, Triangle, Circle } = require('./shapes');

describe("Shapes tests", () => {
    it("tests that we properly can load our shape", () => {
        let shape = new Triangle();
        let svg = new SVG(shape, "", "blue");
        expect(svg.shape).toBeInstanceOf(Triangle);
        shape = new Circle();
        svg = new SVG(shape, "", "blue");
        expect(svg.shape).toBeInstanceOf(Circle);
        shape = new Square();
        svg = new SVG(shape, "", "blue");
        expect(svg.shape).toBeInstanceOf(Square);
    })
    it("tests that our shapes load the proper svg", () => {
        const shape = new Triangle();
        shape.addColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
    it("tests that our svg loads the proper text", () => {
        const shape = new Triangle();
        const text = "Hi bob";
        const svg = new SVG(shape, text, "blue");
        expect(svg.text).toEqual(text);
    })
})