class Person {
    constructor(
        public name: string,
        public readonly age: number,
    ) { 
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
}
