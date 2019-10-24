const TASK_LIST_URL = 'https://mobile-daily.appianci.net/suite/rest/a/task/latest/tasks'
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const USER_NAME = 'kavin.kasinathan.s';
const PASSWORD = 'ineedtoadminister';
const CREDENTIALS = `${USER_NAME}:${PASSWORD}`;

export function getTasks() {
    return fetch(TASK_LIST_URL, {
        headers: {
            'Authorization': getAuthHeader()
        }
    });
}

function getAuthHeader() {
    const credentialsEncoded = encodeBase64(CREDENTIALS);
    return `Basic ${credentialsEncoded}`;
}

function encodeBase64(input) {
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = CHARS;
    str.charAt(i | 0) || (map = '=', i % 1);
    output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

        charCode = str.charCodeAt(i += 3/4);

        if (charCode > 0xFF) {
        throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }

        block = block << 8 | charCode;
    }

    return output;
}