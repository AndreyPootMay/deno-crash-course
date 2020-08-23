// Top Level await
const getPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("123"), 3000));

const result = await getPromise();
console.log(result);
