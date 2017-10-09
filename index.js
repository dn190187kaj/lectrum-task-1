const arr = [1, 'text', [1, 2], { arr: 1}, true, null, undefined, NaN];

const messageDelay = 1000;
const waitDelay = 1000;
arr.forEach((item, index) => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ item, index }), messageDelay * (2 * index + 1));
  });
  myPromise.then(({ item, index }) => {
    console.log(`index: ${index}, item:${item}`);
    setTimeout(() => console.log(`Wait 1 sec after index:${index}`), waitDelay);
  });
});