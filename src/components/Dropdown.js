import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange, text}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();
    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    useEffect(() => {
        const onBodyClick = (event) => {
            //Si l'event (un des 3 [body, value, dropdown] --> voir event bubbling) se trouve a l'intérieur de mon composant dropdown alors je ne ferme pas le dropdown mais je laisse faire le reste du code afin qu'il ne se ferme
            if (ref.current.contains(event.target)) {
                return;
            }
            //C'est un event qui provient en dehors de mon composant - du coup je ferme ma dropdown
            setOpen(false);
        };
        
        document.body.addEventListener(
            'click', 
            onBodyClick,
            { capture: true }
        ); 

        //On clean l'event
        return () => {
            document.body.removeEventListener("click", onBodyClick, {
              capture: true,
            });
          };

    }, []);

    return (
        <div className='ui form' ref={ref}>
            <div className='field'>
                <label className='label'>{ text }</label>
                <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div
                        className={`menu ${open ? 'visible transition' : ''}`}
                        >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;