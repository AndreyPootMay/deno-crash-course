function someAsyncCall() {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(5), 5000); // 5 seconds
    });
}

console.log('Async-Module:', 'awaiting async call', new Date());

const data = await someAsyncCall();

console.log('Async-Module:', 'done');

export default data;