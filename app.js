function encryptText() {
    const text = document.querySelector('.decoder__text__content').value;
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char === 'e') {
            encryptedText += 'enter';
        } else if (char === 'i') {
            encryptedText += 'imes';
        } else if (char === 'a') {
            encryptedText += 'ai';
        } else if (char === 'o') {
            encryptedText += 'ober';
        } else if (char === 'u') {
            encryptedText += 'ufat';
        } else {
            encryptedText += char;
        }
    }

    displayText(encryptedText);
}

function decryptText() {
    const text = document.querySelector('.decoder__text__content').value;
    let decryptedText = '';
    let i = 0;

    while (i < text.length) {
        const char = text[i];
        
        if (text.substr(i, 5) === 'enter') {
            decryptedText += 'e';
            i += 5;
        } else if (text.substr(i, 4) === 'imes') {
            decryptedText += 'i';
            i += 4;
        } else if (text.substr(i, 2) === 'ai') {
            decryptedText += 'a';
            i += 2;
        } else if (text.substr(i, 4) === 'ober') {
            decryptedText += 'o';
            i += 4;
        } else if (text.substr(i, 4) === 'ufat') {
            decryptedText += 'u';
            i += 4;
        } else {
            decryptedText += char;
            i++;
        }
    }

    displayText(decryptedText);
}

function displayText(text) {
    document.querySelector('.image__after__text').textContent = text;
    document.querySelector('.image__before').classList.add('hidden');
    document.querySelector('.image__after').classList.remove('hidden');
}

function copyText() {
    const textToCopyElement = document.querySelector('.image__after__text');
    const textToCopy = textToCopyElement.textContent;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);
        
        textToCopyElement.textContent = 'Nenhuma mensagem encontrada';
    }
}