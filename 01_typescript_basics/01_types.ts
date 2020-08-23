function add(a: number, b: number): number {
    return a + b;
}

let result = add(1, 2);

console.log(result);

// Null and undefined
function someFunc(n: number) {
    if (n %2 === 0) {
        return "even";
    }

    return null;
}

const value = someFunc(4)!;

value.substring(1);

// void

/*function hello(name: string) {
    console.log(`Hello ${name}`);
}

const msg: string = hello("Zura");
*/

//Array
/*let fruits = ["orange", 2, true, "apple", "banana"];
fruits[1] = 15;*/