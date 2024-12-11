import React, { useEffect, useRef, useState } from 'react'

const Speechtext = () => {
    const [listning, setListning] = useState(false);
    const [transcripting, setTranscripting] = useState("");
    const recognizationRef = useRef(null);
    useEffect(() => {
        if (!("webkitSpeechRecognition" in window)) {
            console.log("Speech Recognition is not supported in this browser.");
            return;
        }
        recognizationRef.current = new window.webkitSpeechRecognition();
        const recognition = recognizationRef.current;
        recognition.interimResult = true;
        recognition.continuous = false;
        recognition.lang = "en-US";
        if("webkitSpeechGrammarList" in window) {   
            // const speechRecognitionList = new window.webkitSpeechGrammarList();
            const grammer = "#JSGF V1.0; grammer punctuation; public <punc> = .| ,|?|!|;|: ;"
            const speechRecognitionList = new window.webkitSpeechGrammarList();
            speechRecognitionList.addFromString(grammer, 1);
            recognition.grammars = speechRecognitionList;
            recognition.onresult = (event) => {
                let text = "";
                for(let i = 0; i < event.results.length; i++) {
                    text += event.results[i][0].transcript;
                }
                setTranscripting(text);
                
            }
        }
        //   recognizationref.current.startListening({ continuous: true, language: 'en-US' });
      }, []);
  return (
    <div>

    </div>
  )
}

export default Speechtext