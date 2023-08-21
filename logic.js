let btn = document.getElementById("shorten");
btn.addEventListener('click', short);

let copy = document.getElementById("copy");
copy.addEventListener('click', copyText);


//function to sort the link by calling api
async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");
    
    const result = await fetch(` https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json(result);

    shortURL.value = data.result.short_link2;
}


//function to copy text to copy the text to clipboard
function copyText(){
    //select the text area to copy text
    let copyField = document.getElementById("shorturl");
    
    //select the text from text field
    copyField.select();

    //copy text inside the text field to clipboard
    navigator.clipboard.writeText(copyField.value);

    //alert
    alert("Copied the text : " + copyField.value);

}