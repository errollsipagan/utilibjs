import { isEmail, generateRandomString, truncateStart, truncateMiddle, toCapitalize } from "../src/string-utils";

const testStrings = ['Lorem ipsum dolor amiet'];
const truncateLength = 10;

describe('isEmail tests', () => {
    const invalidEmails = ['test','test@asdas', 'test @ asd.com'];
    const validEmails = ['johndoe@gmail.com'];
    invalidEmails.forEach(email => {
        it(`\'${email}\' is invalid email`, () => {
            expect(isEmail(email)).toBe(false);
        });
    });
    validEmails.forEach(email => {
        it(`\'${email}\' is valid email`, () => {
            expect(isEmail(email)).toBe(true);
        });
    });
});

describe('generateRandomString tests', () => {
    const stringLengths = [5,10,20];
    stringLengths.forEach(stringLen => {
        const generatedString = generateRandomString(stringLen);
        it(`\'${generatedString}\' is ${stringLen} chars`, () => {
            expect(generatedString.length).toBe(stringLen);
        });
    });
});

describe('truncateStart tests', () => {
    const regex = /^\.\.\./;
    testStrings.forEach((str) => {
        const truncated = truncateStart(str, truncateLength);
        it(`\'${str}\' truncateStart is ${truncated}`, () => {
            const startsWithThreeDots = regex.test(truncated);
            expect(startsWithThreeDots).toBe(true);
        });
    });
});

describe('truncateMiddle tests', () => {
    const regex = /\.\.\./;
    testStrings.forEach((str) => {
        const truncated = truncateMiddle(str, truncateLength);
        it(`\'${str}\' truncateMiddle is ${truncated}`, () => {
            const containsThreeDots = regex.test(truncated);
            expect(containsThreeDots).toBe(true);
        });
    });
});

describe('toCapitalize tests', () => {
    const regex = /^[A-Z][a-z]*(\s+[A-Z][a-z]*)*$/;
    testStrings.forEach((str) => {
        const truncated = toCapitalize(str);
        it(`\'${str}\' toCapitalize is ${truncated}`, () => {
            const allFirstLettersUppercase = regex.test(truncated);
            expect(allFirstLettersUppercase).toBe(true);
        });
    });
});