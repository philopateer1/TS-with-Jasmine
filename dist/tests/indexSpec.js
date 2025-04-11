"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
it('expect myFunc(5) to equal 25', () => {
    expect((0, index_1.default)(5)).toEqual(25);
});
const index_2 = require("../index");
describe('calculateSum', () => {
    it('should return the correct sum of numbers in an array', () => {
        const result = (0, index_2.calculateSum)([1, 2, 3, 4]);
        expect(result).toBe(10);
    });
    it('should return 0 for an empty array', () => {
        const result = (0, index_2.calculateSum)([]);
        expect(result).toBe(0);
    });
    it('should throw an error for non-array input', () => {
        expect(() => (0, index_2.calculateSum)(123)).toThrow(new Error("Input must be an array."));
    });
    it('should handle extremely large numbers without overflow', () => {
        const largeNumbers = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        const result = (0, index_2.calculateSum)(largeNumbers);
        expect(result).toBe(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);
    });
    it('should return the single element when array has one element', () => {
        const singleElementArray = [42];
        const result = (0, index_2.calculateSum)(singleElementArray);
        expect(result).toBe(42);
    });
});
const index_3 = require("../index");
describe('fetchData', () => {
    const url = 'https://dummyjson.com/user';
    it('should successfully fetch data from the API and resolve with the expected message', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, index_3.fetchData)(url);
        expect(data);
    }));
    it('should throw an error on invalid URL', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, index_3.fetchData)('')).toBeRejectedWithError("Invalid URL.");
    }));
    it('should throw an error on network error or failed response', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, index_3.fetchData)('https://dummyjson.com/user')).toBeRejectedWithError("Failed to fetch data.");
    }));
    it('should handle empty API response gracefully', () => __awaiter(void 0, void 0, void 0, function* () {
        Promise.resolve({
            json: () => Promise.resolve([]),
            ok: true
        });
        const result = yield (0, index_3.fetchData)('https://dummyjson.com/user');
        expect(result).toEqual([]);
    }));
});
