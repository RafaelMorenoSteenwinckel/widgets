import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {

    const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
    const [textTranslated, setTextTranslated] = useState('');
    const [realValue, setRealValue] = useState('');

    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', 
            {},
            {
                params: {
                    q: {text},
                    target: language.value,
                    key: KEY,
                    model: "base"
                }
            }
        ).then(
            (response) => {

                if (response.data.data.translations) {
                    const tradComplete = response.data.data.translations[0].translatedText.replace(/&quot;/g, '"');
                    setTextTranslated(tradComplete);
                }
            }
        );
    }, [text, language]);

    
    useEffect(() => {
        if (textTranslated.length) {
            const value = JSON.parse(textTranslated);
            if (Object.values(value)) {
                setRealValue(Object.values(value)[0]);
            }
        }
        
    }, [textTranslated]);

    //const html = {__html: textTranslated};

    return (
        <div >
            {
                //<div dangerouslySetInnerHTML={html} />
            }
        
            <h1>{ realValue }</h1>
        </div>
    );
};

export default Convert;