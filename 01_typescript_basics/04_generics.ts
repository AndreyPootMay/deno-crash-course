//const map = new Map<string, string>();
//map.set(1, "foo");

class MyMap extends Map<number, string> {
}

class User {
}

class Lecturer extends User {};

function getPromise<T extends User>(value: T): Promise<T> {
    return new Promise((res, rej) => setTimeout(() => res(value), 100));
}

const value = await getPromise(new User());
console.log(value);