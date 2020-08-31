/**
 * 
 * @param {} el 
 */
export function getCursorPosition(el) {
    if(!el) {
        return -1;
    }
    return el.selectionStart;
}
/**
 * 
 *
 */
export function setSelection(el,sekectionStart, selectionEnd) {
    if (!el) {
        return el;
    }
    const input = el;
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
    return el;
}
/**
 * 
 * @param {*} el 
 * @param {*} position 
 */
export function setCursorPosition(el, position) {
    if (!el) {
        return el;
    }
    return setSelection(el,position,position);
}

export function getSelection(el,position,position){
    if(el.length === 0 ){
        return -1;
    }
    if(!el.value) {
        return -1;
    }
    if(el.value.length === 0) {
        return -1;
    }

    const startPos = el.sekectionStart;
    const endPos = el.selectionEnd;
    return el.value.subString(startPos, endPos);
}