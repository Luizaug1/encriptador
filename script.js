
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

document.addEventListener('DOMContentLoaded', function () {
    const texto = document.getElementById("texto");
    const textoResultado = document.getElementById("texto_resultado");

    function encriptar(textoEncriptado) {
        const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoEncriptado = textoEncriptado.toLowerCase();
        matrizCodigo.forEach(codigo => {
            textoEncriptado = textoEncriptado.replaceAll(codigo[0], codigo[1]);
        });
        return textoEncriptado;
    }

    function desencriptar(textoDesencriptado) {
        const matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
        matrizCodigo.forEach(codigo => {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[0], codigo[1]);
        });
        return textoDesencriptado;
    }

    function btnEncriptar() {
        const textoEncriptado = encriptar(texto.value);
        textoResultado.value = textoEncriptado;
        texto.value = "";
    }

    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textoResultado.value);
        textoResultado.value = textoDesencriptado;
    }

    function copiarTexto() {
        textoResultado.select();
        textoResultado.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }

    document.getElementById("btnEncriptar").addEventListener("click", btnEncriptar);
    document.getElementById("btnDesencriptar").addEventListener("click", btnDesencriptar);
    document.getElementById("btnCopiar").addEventListener("click", copiarTexto);
});
