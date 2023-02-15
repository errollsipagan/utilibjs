describe('isEmail tests', () => {
    const invalidEmails = ['test','test@asdas', 'test @ asd.com'];
    const validEmails = ['johndoe@gmail.com'];
    invalidEmails.forEach(email => {
        it.todo(`\'${email}\' is invalid email`);
    });
    validEmails.forEach(email => {
        it.todo(`\'${email}\' is valid email`);
    });
});