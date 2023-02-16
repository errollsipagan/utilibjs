# utilibjs
> My collection of most common used function in javascript. Most of them found in stackoverflow.

## Table of Contents

<!-- toc -->

- [Install](#install)
- [API](#api)
  * [BrowserFunctions](#browserfunctions)
  * [isSafari() ⇒ boolean](#issafari-%E2%87%92-boolean)
  * [isChrome() ⇒ boolean](#ischrome-%E2%87%92-boolean)
  * [isOffline() ⇒ boolean](#isoffline-%E2%87%92-boolean)
  * [openInNewTab(url)](#openinnewtaburl)
  * [triggerDownload(fileUrl, [fileName], [target])](#triggerdownloadfileurl-filename-target)
  * [downloadFile(file)](#downloadfilefile)
  * [FileFunctions](#filefunctions)
  * [getFileType(fileName) ⇒ string](#getfiletypefilename-%E2%87%92-string)
  * [getRelativePath(path) ⇒ string](#getrelativepathpath-%E2%87%92-string)
  * [renameFile(file, name) ⇒ File](#renamefilefile-name-%E2%87%92-file)
  * [getFileName(url) ⇒ string](#getfilenameurl-%E2%87%92-string)
  * [convertMBToBytes(mb) ⇒ number](#convertmbtobytesmb-%E2%87%92-number)
  * [convertKBToBytes(kb) ⇒ number](#convertkbtobyteskb-%E2%87%92-number)
  * [removeFileExtension(fileName) ⇒ string](#removefileextensionfilename-%E2%87%92-string)
  * [KeyboardFunctions](#keyboardfunctions)
  * [isEnterKeyPressed(event) ⇒ boolean](#isenterkeypressedevent-%E2%87%92-boolean)
  * [isSpacebarKeyPressed(event) ⇒ boolean](#isspacebarkeypressedevent-%E2%87%92-boolean)
  * [isEscKeyPressed(event) ⇒ boolean](#isesckeypressedevent-%E2%87%92-boolean)
  * [isBackspaceKeyPressed(event) ⇒ boolean](#isbackspacekeypressedevent-%E2%87%92-boolean)
  * [isTabKeyPressed(event) ⇒ boolean](#istabkeypressedevent-%E2%87%92-boolean)
  * [isShiftKeyPressed(event) ⇒ boolean](#isshiftkeypressedevent-%E2%87%92-boolean)
  * [isUndoKeyPressed(event) ⇒ boolean](#isundokeypressedevent-%E2%87%92-boolean)
  * [StringFunctions](#stringfunctions)
  * [isEmail(email) ⇒](#isemailemail-%E2%87%92)
  * [generateRandomString(length) ⇒](#generaterandomstringlength-%E2%87%92)
  * [truncateStart(fullStr, strLen, separator) ⇒](#truncatestartfullstr-strlen-separator-%E2%87%92)
  * [truncateMiddle(fullStr, strLen, separator) ⇒](#truncatemiddlefullstr-strlen-separator-%E2%87%92)
  * [truncateEmail(email, strLen, separator) ⇒](#truncateemailemail-strlen-separator-%E2%87%92)
  * [toCapitalize(str) ⇒](#tocapitalizestr-%E2%87%92)
- [MISC](#misc)

<!-- tocstop -->

## Install

    npm install utilibjs

## API

### BrowserFunctions

<dl>
<dt><a href="#isSafari">isSafari()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser is Safari.</p>
</dd>
<dt><a href="#isChrome">isChrome()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser is Chrome.</p>
</dd>
<dt><a href="#isOffline">isOffline()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the browser is currently offline.</p>
</dd>
<dt><a href="#openInNewTab">openInNewTab(url)</a></dt>
<dd><p>Open the given URL in a new tab.</p>
</dd>
<dt><a href="#triggerDownload">triggerDownload(fileUrl, [fileName], [target])</a></dt>
<dd><p>Download the file at the given URL with the given filename and target.</p>
</dd>
<dt><a href="#downloadFile">downloadFile(file)</a></dt>
<dd><p>Download the given file by creating a download link and clicking it.</p>
</dd>
</dl>

<a name="isSafari"></a>

### isSafari() ⇒ <code>boolean</code>
Check if the browser is Safari.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the browser is Safari, false otherwise.  
<a name="isChrome"></a>

### isChrome() ⇒ <code>boolean</code>
Check if the browser is Chrome.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the browser is Chrome, false otherwise.  
<a name="isOffline"></a>

### isOffline() ⇒ <code>boolean</code>
Check if the browser is currently offline.

**Kind**: global function  
**Returns**: <code>boolean</code> - true if the browser is offline, false otherwise.  
<a name="openInNewTab"></a>

### openInNewTab(url)
Open the given URL in a new tab.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to open in a new tab. |

<a name="triggerDownload"></a>

### triggerDownload(fileUrl, [fileName], [target])
Download the file at the given URL with the given filename and target.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| fileUrl | <code>string</code> |  | The URL of the file to download. |
| [fileName] | <code>string</code> \| <code>null</code> | <code>null</code> | The name of the file to save as. |
| [target] | <code>string</code> \| <code>null</code> | <code>null</code> | The target window or tab to open the file in. |

<a name="downloadFile"></a>

### downloadFile(file)
Download the given file by creating a download link and clicking it.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | The file to download. |


### FileFunctions

<dl>
<dt><a href="#getFileType">getFileType(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Get file type based on the file name extension.</p>
</dd>
<dt><a href="#getRelativePath">getRelativePath(path)</a> ⇒ <code>string</code></dt>
<dd><p>Get the relative path from a full path.</p>
</dd>
<dt><a href="#renameFile">renameFile(file, name)</a> ⇒ <code>File</code></dt>
<dd><p>Rename a file with a new name.</p>
</dd>
<dt><a href="#getFileName">getFileName(url)</a> ⇒ <code>string</code></dt>
<dd><p>Get the file name from a URL.</p>
</dd>
<dt><a href="#convertMBToBytes">convertMBToBytes(mb)</a> ⇒ <code>number</code></dt>
<dd><p>Convert megabytes to bytes.</p>
</dd>
<dt><a href="#convertKBToBytes">convertKBToBytes(kb)</a> ⇒ <code>number</code></dt>
<dd><p>Convert kilobytes to bytes.</p>
</dd>
<dt><a href="#removeFileExtension">removeFileExtension(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Remove the file extension from a file name.</p>
</dd>
</dl>

<a name="getFileType"></a>

### getFileType(fileName) ⇒ <code>string</code>
Get file type based on the file name extension.

**Kind**: global function  
**Returns**: <code>string</code> - The file type.  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | The file name. |

<a name="getRelativePath"></a>

### getRelativePath(path) ⇒ <code>string</code>
Get the relative path from a full path.

**Kind**: global function  
**Returns**: <code>string</code> - The relative path.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The full path. |

<a name="renameFile"></a>

### renameFile(file, name) ⇒ <code>File</code>
Rename a file with a new name.

**Kind**: global function  
**Returns**: <code>File</code> - A new File instance with the new name.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>File</code> | The file to rename. |
| name | <code>string</code> | The new name to assign to the file. |

<a name="getFileName"></a>

### getFileName(url) ⇒ <code>string</code>
Get the file name from a URL.

**Kind**: global function  
**Returns**: <code>string</code> - The file name.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The file URL. |

<a name="convertMBToBytes"></a>

### convertMBToBytes(mb) ⇒ <code>number</code>
Convert megabytes to bytes.

**Kind**: global function  
**Returns**: <code>number</code> - The size in bytes.  

| Param | Type | Description |
| --- | --- | --- |
| mb | <code>number</code> | The size in megabytes. |

<a name="convertKBToBytes"></a>

### convertKBToBytes(kb) ⇒ <code>number</code>
Convert kilobytes to bytes.

**Kind**: global function  
**Returns**: <code>number</code> - The size in bytes.  

| Param | Type | Description |
| --- | --- | --- |
| kb | <code>number</code> | The size in kilobytes. |

<a name="removeFileExtension"></a>

### removeFileExtension(fileName) ⇒ <code>string</code>
Remove the file extension from a file name.

**Kind**: global function  
**Returns**: <code>string</code> - The file name without the extension.  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | The file name. |


### KeyboardFunctions

<dl>
<dt><a href="#isEnterKeyPressed">isEnterKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Enter key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isSpacebarKeyPressed">isSpacebarKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Spacebar key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isEscKeyPressed">isEscKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Escape key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isBackspaceKeyPressed">isBackspaceKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Backspace key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isTabKeyPressed">isTabKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Tab key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isShiftKeyPressed">isShiftKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Shift key is pressed in the keyboard event.</p>
</dd>
<dt><a href="#isUndoKeyPressed">isUndoKeyPressed(event)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the Undo (Ctrl + Z) key combination is pressed in the keyboard event.</p>
</dd>
</dl>

<a name="isEnterKeyPressed"></a>

### isEnterKeyPressed(event) ⇒ <code>boolean</code>
Check if the Enter key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Enter key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isSpacebarKeyPressed"></a>

### isSpacebarKeyPressed(event) ⇒ <code>boolean</code>
Check if the Spacebar key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Spacebar key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isEscKeyPressed"></a>

### isEscKeyPressed(event) ⇒ <code>boolean</code>
Check if the Escape key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Escape key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isBackspaceKeyPressed"></a>

### isBackspaceKeyPressed(event) ⇒ <code>boolean</code>
Check if the Backspace key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Backspace key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isTabKeyPressed"></a>

### isTabKeyPressed(event) ⇒ <code>boolean</code>
Check if the Tab key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Tab key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isShiftKeyPressed"></a>

### isShiftKeyPressed(event) ⇒ <code>boolean</code>
Check if the Shift key is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Shift key is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

<a name="isUndoKeyPressed"></a>

### isUndoKeyPressed(event) ⇒ <code>boolean</code>
Check if the Undo (Ctrl + Z) key combination is pressed in the keyboard event.

**Kind**: global function  
**Returns**: <code>boolean</code> - - True if Undo key combination is pressed, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | The keyboard event. |

### StringFunctions

<dl>
<dt><a href="#isEmail">isEmail(email)</a> ⇒</dt>
<dd><p>Determines whether the input is a valid email address.</p>
</dd>
<dt><a href="#generateRandomString">generateRandomString(length)</a> ⇒</dt>
<dd><p>Generates a random string.</p>
</dd>
<dt><a href="#truncateStart">truncateStart(fullStr, strLen, separator)</a> ⇒</dt>
<dd><p>Truncates a string from the beginning and adds a separator at the end.</p>
</dd>
<dt><a href="#truncateMiddle">truncateMiddle(fullStr, strLen, separator)</a> ⇒</dt>
<dd><p>Truncates a string from both the beginning and the end and adds a separator in the middle.</p>
</dd>
<dt><a href="#truncateEmail">truncateEmail(email, strLen, separator)</a> ⇒</dt>
<dd><p>Truncates an email address and adds a separator in the middle.</p>
</dd>
<dt><a href="#toCapitalize">toCapitalize(str)</a> ⇒</dt>
<dd><p>Converts the first letter of each word in a string to uppercase.</p>
</dd>
</dl>

<a name="isEmail"></a>

### isEmail(email) ⇒
Determines whether the input is a valid email address.

**Kind**: global function  
**Returns**: `true` if the input is a valid email address, `false` otherwise.  

| Param | Description |
| --- | --- |
| email | The email address to check. |

<a name="generateRandomString"></a>

### generateRandomString(length) ⇒
Generates a random string.

**Kind**: global function  
**Returns**: A random string of the specified length.  

| Param | Description |
| --- | --- |
| length | The length of the string to generate. |

<a name="truncateStart"></a>

### truncateStart(fullStr, strLen, separator) ⇒
Truncates a string from the beginning and adds a separator at the end.

**Kind**: global function  
**Returns**: The truncated string with the separator at the end.  

| Param | Description |
| --- | --- |
| fullStr | The string to truncate. |
| strLen | The maximum length of the truncated string. |
| separator | The separator to add at the end of the truncated string. Default is "...". |

<a name="truncateMiddle"></a>

### truncateMiddle(fullStr, strLen, separator) ⇒
Truncates a string from both the beginning and the end and adds a separator in the middle.

**Kind**: global function  
**Returns**: The truncated string with the separator in the middle.  

| Param | Description |
| --- | --- |
| fullStr | The string to truncate. |
| strLen | The maximum length of the truncated string. |
| separator | The separator to add in the middle of the truncated string. Default is "...". |

<a name="truncateEmail"></a>

### truncateEmail(email, strLen, separator) ⇒
Truncates an email address and adds a separator in the middle.

**Kind**: global function  
**Returns**: The truncated email address with the separator in the middle.  

| Param | Description |
| --- | --- |
| email | The email address to truncate. |
| strLen | The maximum length of the truncated email address. |
| separator | The separator to add in the middle of the truncated email address. Default is "...". |

<a name="toCapitalize"></a>

### toCapitalize(str) ⇒
Converts the first letter of each word in a string to uppercase.

**Kind**: global function  
**Returns**: The input string with the first letter of each word in uppercase.  

| Param | Description |
| --- | --- |
| str | The string to convert. |


<!-- api -->

<!-- apistop -->

## MISC
> Happy coding!