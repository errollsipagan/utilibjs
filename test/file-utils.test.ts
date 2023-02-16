import { getFileType } from "../src/file-utils";

describe('getFileType tests', () => {
    const files = ['Document.docx', 'Archive.v2.zip', 'Sample file.txt'];
    const expectedFileTypes = ['docx', 'zip', 'txt'];
    files.forEach((file, index) => {
        const expectedFileType = expectedFileTypes[index];
        it(`\'${file}\' type is ${expectedFileType}`, () => {
            expect(getFileType(file)).toBe(expectedFileType);
        });
    });
});