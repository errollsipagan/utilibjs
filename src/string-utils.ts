/**
 * Determines whether the input is a valid email address.
 * 
 * @param email - The email address to check.
 * @returns `true` if the input is a valid email address, `false` otherwise.
 */
export const isEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

/**
 * Generates a random string.
 * 
 * @param length - The length of the string to generate.
 * @returns A random string of the specified length.
 */
export const generateRandomString = (length: number = 5): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

/**
 * Truncates a string from the beginning and adds a separator at the end.
 * 
 * @param fullStr - The string to truncate.
 * @param strLen - The maximum length of the truncated string.
 * @param separator - The separator to add at the end of the truncated string. Default is "...".
 * @returns The truncated string with the separator at the end.
 */
export const truncateStart = (fullStr: string, strLen: number, separator = '...'): string => {
    if (fullStr.length <= strLen) return fullStr;

    const sepLen = separator.length;
    const charsToShow = strLen - sepLen;
    const backChars = Math.floor(charsToShow);

    return separator + fullStr.substring(fullStr.length - backChars);
};

/**
 * Truncates a string from both the beginning and the end and adds a separator in the middle.
 * 
 * @param fullStr - The string to truncate.
 * @param strLen - The maximum length of the truncated string.
 * @param separator - The separator to add in the middle of the truncated string. Default is "...".
 * @returns The truncated string with the separator in the middle.
 */
export const truncateMiddle = (fullStr: string, strLen: number, separator = '...'): string => {
    if (fullStr.length <= strLen) return fullStr;

    const sepLen = separator.length;
    const charsToShow = strLen - sepLen;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);

    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);
};

/**
 * Truncates an email address and adds a separator in the middle.
 * 
 * @param email - The email address to truncate.
 * @param strLen - The maximum length of the truncated email address.
 * @param separator - The separator to add in the middle of the truncated email address. Default is "...".
 * @returns The truncated email address with the separator in the middle.
 */
export const truncateEmail = (email: string, strLen: number, separator = '...'): string => {
    const emailParts = email.split('@');
    const truncatedEmail = truncateMiddle(emailParts[0], strLen - emailParts[1].length, separator);
    return `${truncatedEmail}@${emailParts[1]}`;
}

/**
 * Converts the first letter of each word in a string to uppercase.
 * 
 * @param str - The string to convert.
 * @returns The input string with the first letter of each word in uppercase.
 */
export const toCapitalize = (str: string): string => {
    const newStr = str.split(' ');
    for (let i = 0, x = newStr.length; i < x; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substr(1);
    }
    return newStr.join(' ');
};

/**
 * Determines whether a given string is a palindrome with minimum required number of characters.
 * @param {string} str - The string to be evaluated.
 * @param {number} [minCharacter=1] - The minimum required number of characters for the string to be considered a palindrome.
 * @returns {boolean} - True if the given string is a palindrome with the required number of characters, false otherwise.
*/
export const isPalindrome = (str: string, minCharacter: number = 1): boolean => {
    const mid = str.length / 2;
    let matchedChars = -1;
    for (let x = 0, y = str.length - 1; x < mid; x++, y--) {
        if (str[x] !== str[y]) {
            return false;
        }
        else {
            matchedChars += 1;
        }
    }
    return matchedChars>=minCharacter;
};

/**
 * Returns an array of all palindromes with minimum required number of characters in a given string.
 * @param {string} str - The string to be evaluated.
 * @param {number} [minCharacter=1] - The minimum required number of characters for a palindrome in the given string to be considered.
 * @returns {string[]} - An array of all palindromes in the given string that meet the minimum required number of characters.
*/
export const getPalindromes = (str: string, minCharacter: number = 1): string[] => {
    const palindromes = [];
    for (let x = 0; x < str.length - 1; x++) {
        for (let y = str.length - 1; y >= 0; y--) {
            if (str[x] === str[y]) {
                const possiblePalindrome = str.substring(x, y + 1);
                if (isPalindrome(possiblePalindrome, minCharacter) && possiblePalindrome.length >= minCharacter * 2) {
                    palindromes.push(possiblePalindrome);
                }
            }
        }
    }
    return palindromes;
}