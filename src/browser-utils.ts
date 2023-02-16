import { getFileName } from "./file-utils";

// Browser detection snippet is from:
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser?noredirect=1&lq=1#answer-9851769
/**
 * Check if the browser is Safari.
 * @returns {boolean} true if the browser is Safari, false otherwise.
*/
export const isSafari = (): boolean =>
  /constructor/i.test((window as any).HTMLElement) ||
  ((p: unknown) => {
    return p?.toString() === '[object SafariRemoteNotification]';
    // @ts-nocheck
  })(!(window as any).safari || (typeof window['safari'] !== 'undefined' && window['safari'].pushNotification));

/**
 * Check if the browser is Chrome.
 * @returns {boolean} true if the browser is Chrome, false otherwise.
*/
export const isChrome = (): boolean => !!window['chrome'] && (!!window['chrome'].webstore || !!window['chrome'].runtime);

/**
 * Check if the browser is currently offline.
 * @returns {boolean} true if the browser is offline, false otherwise.
*/
export const isOffline = (): boolean => !window.navigator.onLine;

/**
 * Open the given URL in a new tab.
 * @param {string} url - The URL to open in a new tab.
*/
export const openInNewTab = (url: string): void => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
};

/**
 * Download the file at the given URL with the given filename and target.
 * @param {string} fileUrl - The URL of the file to download.
 * @param {string|null} [fileName=null] - The name of the file to save as.
 * @param {string|null} [target=null] - The target window or tab to open the file in.
*/
export const triggerDownload = (fileUrl: string, fileName = null, target = null): void => {
    const a = document.createElement('a');
    a.href = fileUrl;

    if (!fileName) {
        a.download = getFileName(fileUrl);
    } else {
        a.download = fileName;
    }

    if (target) {
        a.target = target;
    }

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
};

/**
 * Download the given file by creating a download link and clicking it.
 * @param {File} file - The file to download.
*/
export const downloadFile = (file: File): void => {
    const { name, type } = file;
    const blob = new Blob([file], { type });
    if ((window.navigator as any).msSaveOrOpenBlob?.(blob, name)) {
        return;
    }
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = name;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
};

