let inAlphabet = {};
let outAlphabet = {};

function parseAlphabet(input, caseSensitive) {
    inAlphabet = { ' ': ' ' };
    outAlphabet = { ' ': ' ' };

    let lines = input.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let parts = lines[i].split('-');

        if (!parts[0] || !parts[1]) continue;

        let human = parts[0].trim();
        let shinx = parts[1].trim().toLowerCase();

        if (human == '') human = ' ';
        if (!caseSensitive) human = human.toUpperCase();

        inAlphabet[human] = shinx;
        outAlphabet[shinx] = human;
    };
};

function translate(input, alphabet, caseSensitive) {
    let result = '';
    do {
        let found = false;
        for (let key in alphabet) {
            let match = caseSensitive
                ? input.indexOf(key) == 0
                : input.toLowerCase().indexOf(key.toLowerCase()) == 0;

            if (match) {
                input = input.substring(key.length);
                result += alphabet[key];
                found = true;
                break;
            };
        };

        if (!found) {
            result += input[0];
            input = input.substring(1);
        };
    } while (input.length > 0);
    return result;
};

function toShinx() {
    let alphabet = document.getElementById('alphabet').value;
    let caseSensitive = document.getElementById('case-sensitive').checked;
    parseAlphabet(alphabet, caseSensitive);

    let input = document.getElementById('input').value;
    let output = translate(input, inAlphabet, caseSensitive);
    document.getElementById('output').value = output;
};

function toHuman() {
    let alphabet = document.getElementById('alphabet').value;
    let caseSensitive = document.getElementById('case-sensitive').checked;
    parseAlphabet(alphabet, caseSensitive);

    let input = document.getElementById('input').value;
    let output = translate(input, outAlphabet, caseSensitive);
    document.getElementById('output').value = output;
};