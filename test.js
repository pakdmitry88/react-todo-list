
const arr = [
  { name: 'first', timeout: 3000 },
{ name: 'second', timeout: 5000 },
{ name: 'third', timeout: 2000 },
];



async function run (arr) {

  for(y of arr) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(y.name), y.timeout)
    });
    let result = await promise;
    console.log(result)
  }
  
}

console.log(run(arr))



const run = async (_arr) => {
  for (x of _arr) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(x.name), x.timeout)
    });
    let result = await promise;
    console.log(result);
  }
};
const arr = [
  { name: 'first', timeout: 3000 },
  { name: 'second', timeout: 5000 },
  { name: 'third', timeout: 2000 },
];
run(arr);
