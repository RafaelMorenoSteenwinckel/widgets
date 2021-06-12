import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const languages = [
    {
        'label': 'Francais',
        'value': 'fr'
    },
    {
        'label': 'Anglais',
        'value': 'en'
    },
    {
        'label': 'Néerlandais',
        'value': 'nl'
    },
    {
        'label': 'Russe',
        'value': 'ru'
    },  
];



const Translator = () => {

    const [currentLang, setCurrentLang] = useState(languages[0]);    
    const [textToConvert, setTextToConvert] = useState('');    
    const [debouncedTerms, setDebouncedTerms] = useState(textToConvert);    
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerms(textToConvert)
        }, 500);

        return () => {
            clearTimeout(timerId);
        };

    }, [textToConvert]);

    return (
        <div>

            <div className="ui form">
                <div className="field">
                    <label>{`Phrase a convertir en ${currentLang.label}`}</label>
                    <input 
                        type="text" 
                        placeholder="Phrase a convertir..." 
                        value={textToConvert}
                        onChange={(e) => setTextToConvert(e.target.value)}
                    />
                </div>
            </div>

            <Dropdown 
                text='Choisir une langue'
                options={languages}
                selected={currentLang}
                onSelectedChange={setCurrentLang}
            />

            <Convert text={debouncedTerms} language={currentLang}/>
        </div>
    );
};
export default Translator;