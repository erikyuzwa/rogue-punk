
// get a random element from a given Array
// came across this gem here: https://www.wiserfirst.com/blog/typescript-random-array-element/
// thank you Qing!
export const getRandomElement = (arr: any[]) =>
    arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
