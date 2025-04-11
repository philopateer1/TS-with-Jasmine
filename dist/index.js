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
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSum = calculateSum;
exports.fetchData = fetchData;
const myFunc = (num) => {
    return num * num;
};
exports.default = myFunc;
function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }
    return numbers.reduce((acc, num) => acc + num, 0);
}
;
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof url !== 'string' || !url) {
            throw new Error("Invalid URL.");
        }
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }
        return yield response.json();
    });
}
;
