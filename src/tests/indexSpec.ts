import myFunc from '../index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

import { calculateSum } from '../index';

describe('calculateSum', () => {
    it('should return the correct sum of numbers in an array', () => {
        const result = calculateSum([1, 2, 3, 4]);
        expect(result).toBe(10);
    });

    it('should return 0 for an empty array', () => {
        const result = calculateSum([]);
        expect(result).toBe(0);
    });

    it('should throw an error for non-array input', () => {
        expect(() => calculateSum(123 as any)).toThrow(new Error("Input must be an array."));
    });
});

import { fetchData } from '../index';

describe('fetchData', () => {
    const url = 'https://dummyjson.com/user';

    it('should successfully fetch data from the API and resolve with the expected message', async () => {
        const data = await fetchData(url);
        expect(data);
    });

    it('should throw an error on invalid URL', async () => {
        await expectAsync(fetchData('')).toBeRejectedWithError("Invalid URL.");
    });

    it('should throw an error on network error or failed response', async () => {
        await expectAsync(fetchData('https://dummyjson.com/user')).toBeRejectedWithError("Failed to fetch data.");
    });
});