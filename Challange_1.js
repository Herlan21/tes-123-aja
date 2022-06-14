
function changeWord(selectedText, changedText, Text){

    // membuat variable hasilReplace untuk mengganti kata dalam kalimat
    let Hasilreplace = Text.replace(selectedText, changedText)
    return Hasilreplace

}
const kalimat1 = 'Herlan pergi ke pasar dengan inisiatif membantu ibunya';
const kalimat2 = 'Saya suka makan seblak';


console.log(changeWord("inisiatif", "terpaksa", kalimat1))
console.log(changeWord("a", "$", kalimat1))
console.log(changeWord("seblak", "ramen", kalimat2))






