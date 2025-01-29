let clipboardArray = "";

let storedData = JSON.parse(localStorage.getItem("keyData")) || [];

document.addEventListener('keydown', (userInput) => {
    const avoidKeywords = ['Shift','Control','Tab','Enter','Alt', 'Backspace'];
    
    if(!avoidKeywords.includes(userInput.key)){
        clipboardArray += userInput.key;
    }
    if(userInput.key === 'Backspace'){
        clipboardArray = clipboardArray.substring(0, clipboardArray.length - 1);
    }

    if(userInput.key === 'Enter'){
        console.log(clipboardArray)
        if (clipboardArray.trim() !== ""){
            storedData.push(clipboardArray);
            localStorage.setItem("keyData", JSON.stringify(storedData));
        }
        clipboardArray = "";
    }
})