import { PASTED_FILE_KIND } from './types';

/**
 * Get file type based on the file name extension.
 * @param {string} fileName - The file name.
 * @returns {string} The file type.
 */
export const getFileType = (fileName: string): string => {
    const filePath = fileName.split('.');
    return filePath[filePath.length - 1].toLowerCase();
};

/**
 * Get the relative path from a full path.
 * @param {string} path - The full path.
 * @returns {string} The relative path.
 */
export const getRelativePath = (path: string): string => {
    if (!path) {
        return path;
    }
    const windowUrl = window.location.href;
    const endIndex = windowUrl.indexOf('#');
    if (endIndex === -1) {
        return path;
    }
    const baseUrl = windowUrl.substring(0, endIndex);
    return path.replace(baseUrl, '');
};

/**
 * Rename a file with a new name.
 * @param {File} file - The file to rename.
 * @param {string} name - The new name to assign to the file.
 * @returns {File} A new File instance with the new name.
 */
export const renameFile = (file: File, name: string): File => {
    const blob = file.slice(0, file.size, file.type);
    const type = getFileType(file.name);
    const newFileName = `${name}.${type}`;
    return new File([blob], newFileName, { type: file.type });
};

/**
 * Get the file name from a URL.
 * @param {string} url - The file URL.
 * @returns {string} The file name.
 */
export const getFileName = (url: string): string => {
    return url.substring(url.lastIndexOf('/') + 1);
};

/**
 * Convert megabytes to bytes.
 * @param {number} mb - The size in megabytes.
 * @returns {number} The size in bytes.
 */
export const convertMBToBytes = (mb: number): number => mb * 1048576;

/**
 * Convert kilobytes to bytes.
 * @param {number} kb - The size in kilobytes.
 * @returns {number} The size in bytes.
 */
export const convertKBToBytes = (kb: number): number => kb * 1024;

/**
 * Remove the file extension from a file name.
 * @param {string} fileName - The file name.
 * @returns {string} The file name without the extension.
 */
export const removeFileExtension = (fileName: string): string =>
        !fileName || fileName.indexOf('.') === -1
            ? fileName
            : fileName
                  .split('.')
                  .slice(0, -1)
                  .join('.');
