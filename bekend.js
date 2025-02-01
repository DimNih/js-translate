async function translateText() {
    const button = document.querySelector('button');
    const resultElement = document.getElementById("result");
    const text = document.getElementById("textInput").value;
    const sourceLang = document.getElementById("sourceLanguage").value;
    const targetLang = document.getElementById("targetLanguage").value;
    
    try {
        button.classList.add('loading');
        resultElement.classList.remove('show');
        
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
        const response = await fetch(url);
        const data = await response.json();
        
        let translatedText = data.responseData.translatedText;
        translatedText = translatedText.replace(/<g id="\d+">\s*<\/g>/g, ''); 
        
        resultElement.innerText = translatedText;
        resultElement.classList.add('show');
    } catch (error) {
        resultElement.innerText = "Error occurred during translation";
        resultElement.style.color = "#ff6b6b";
        resultElement.classList.add('show');
    } finally {
        button.classList.remove('loading');
    }
}