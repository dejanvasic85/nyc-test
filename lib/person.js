export default class Person {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        let hello = 'hello ' + this.name;
        console.log(hello);

        return hello;
    }

    sayGoodbye() {
        return 'Goodbye ' + this.name;
    }

}