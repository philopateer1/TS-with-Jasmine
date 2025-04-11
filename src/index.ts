const myFunc = (num: number): number => {
    return num * num;
};
export default myFunc;

export function calculateSum(numbers: number[]): number {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }
    return numbers.reduce((acc, num) => acc + num, 0);
};

export async function fetchData(url: string): Promise<any> {
    if (typeof url !== 'string' || !url) {
        throw new Error("Invalid URL.");
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data.");
    }
    return await response.json();
};