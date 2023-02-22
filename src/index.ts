// browser imports
import { isSafari, isChrome, isOffline, openInNewTab, triggerDownload, downloadFile } from './browser-utils';
// file imports
import { getFileType, getRelativePath, renameFile, getFileName, convertKBToBytes, convertMBToBytes, removeFileExtension } from './file-utils';
// keybord imports
import { isBackspaceKeyPressed, isEnterKeyPressed, isEscKeyPressed, isShiftKeyPressed, isSpacebarKeyPressed, isTabKeyPressed, isUndoKeyPressed } from './keyboard-utils';
// string imports
import { isEmail, generateRandomString, truncateEmail, truncateMiddle, truncateStart, toCapitalize, isPalindrome, getPalindromes } from './string-utils';
// browser exports
export { isSafari, isChrome, isOffline, openInNewTab, triggerDownload, downloadFile };
// file exports
export { getFileType, getRelativePath, renameFile, getFileName, convertKBToBytes, convertMBToBytes, removeFileExtension };
// keyboard exports
export { isBackspaceKeyPressed, isEnterKeyPressed, isEscKeyPressed, isShiftKeyPressed, isSpacebarKeyPressed, isTabKeyPressed, isUndoKeyPressed };
// string exports
export { isEmail, generateRandomString, truncateEmail, truncateMiddle, truncateStart, toCapitalize, isPalindrome, getPalindromes };