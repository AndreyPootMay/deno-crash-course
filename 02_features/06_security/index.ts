// Read current working directory --allow-read
console.log(Deno.cwd());

// Read file content and output --allow-read
const content = Deno.readTextFileSync('./read.txt');
console.log(content);

// Write content into file --allow-write
Deno.writeTextFile("./write.txt", "123");

// Environmental access --allow-env
Deno.env.get("TEST");

// Allow network access --allow-net
const json = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then (res => res)
    .then(res => res.json());

console.table(json);