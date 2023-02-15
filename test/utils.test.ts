import { isEmail } from "../src/string-utils";

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