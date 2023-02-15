/**
 * Check if the Enter key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Enter key is pressed, false otherwise.
 */
export const isEnterKeyPressed = (event: KeyboardEvent): boolean => event.key === 'Enter';

/**
 * Check if the Spacebar key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Spacebar key is pressed, false otherwise.
 */
export const isSpacebarKeyPressed = (event: KeyboardEvent): boolean => event.key === ' ';

/**
 * Check if the Escape key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Escape key is pressed, false otherwise.
 */
export const isEscKeyPressed = (event: KeyboardEvent): boolean => event.key === 'Escape';

/**
 * Check if the Backspace key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Backspace key is pressed, false otherwise.
 */
export const isBackspaceKeyPressed = (event: KeyboardEvent): boolean => event.key === 'Backspace';

/**
 * Check if the Tab key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Tab key is pressed, false otherwise.
 */
export const isTabKeyPressed = (event: KeyboardEvent): boolean => event.key === 'Tab';

/**
 * Check if the Shift key is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Shift key is pressed, false otherwise.
 */
export const isShiftKeyPressed = (event: KeyboardEvent): boolean => event.key === 'Shift';

/**
 * Check if the Undo (Ctrl + Z) key combination is pressed in the keyboard event.
 * @param {KeyboardEvent} event - The keyboard event.
 * @return {boolean} - True if Undo key combination is pressed, false otherwise.
 */
export const isUndoKeyPressed = (event: KeyboardEvent): boolean => (event.ctrlKey || event.metaKey) && event.key === "z";
