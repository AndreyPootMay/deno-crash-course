/*let user: {
    name: string;
    age: number,
    [key: string]: any
};

user = {
    name: 'Andrey',
    age: 28,
    surname: ""
}*/

interface Person {
    name: string;
    age: number;
    [key: string]: any;
    hello(): string;
}

let user: Person = {
    name: 'Andrey',
    age: 20,
    surname: '',
    hello(): string {
        return `Hello from ${this.name}`;
    },
};