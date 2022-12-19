
const permutationArray = (nums: any, lenght: number): number[][] => {
    let lenghtCopy = lenght;
    return nums.flatMap((v: number, i: number) => lenght > 1
        ? permutationArray(nums.slice(i + 1), lenghtCopy - 1).map(w => [v, ...w])
        : [[v]]
    );
};

const permutationSum = (nums: number[], target: number): number[][] => {
    const result: number[][] = [];
    for (let i = 1; i <= nums.length; i++) {
        const permuteArray = permutationArray(nums, i)
        const posibleArray: number[][] = permuteArray.filter((array: number[]) => array.reduce((a, b) => a + b, 0) === target);
        posibleArray.forEach((array: number[]) => {
            const indicesArray = array.map((value: number) => nums.findIndex((num: number) => num === value));
            result.push(indicesArray);
        });
    }
    return result;
};

console.log(permutationSum([1, 7, 11, 5, 4, 3, 2], 9));
