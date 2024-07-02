import React, { useState } from 'react'

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
}

const SpellCheckApp = () => {

    const [input, setInputText] = useState({
        inputText: "",
        suggestedText: ""
    })

    const handleInputChange = (e) => {
       // debugger;
        const text = e.target.value;
        setInputText({inputText:text })

        const words = text.split(" ");
        const correctWords = words.map((word) => {
            const correctWord = customDictionary[word.toLowerCase()];
            return correctWord || word;
        })

        const correctedText = correctWords.join(" ");

        const firstCorrection = correctWords.find((word, index) => word !== words[index]);

      

    setInputText({suggestedText: (firstCorrection || "")})

      

    }
  return (
    <div>
        <h1>spell Check and Auto-Correction</h1>
        <textarea 
        value={input.inputText}
        onChange={handleInputChange}
        placeholder='Enter text...'
        rows={5}
        columns={40}
        >

        </textarea>
        { input.suggestedText &&
   
   <p>Did you mean: <strong>{input.suggestedText }</strong>?</p>
}
    </div>
  )
}

export default SpellCheckApp