import React, { useState } from 'react';

const Accordion = ( {items} ) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        //console.log ("Click on title !", index);

        if (activeIndex === index){
            setActiveIndex(null);
        } 
        else  {
            setActiveIndex(index);
        }
        
    };

    const renderedItems = items.map((item, index) => {
        const active = activeIndex === index ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`${active} title`}
                    onClick={ () => onTitleClick(index) }
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`${active} content`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        //Ca evite de devoir mettre un div qui fait une petite merde d'affichage
        <React.Fragment>
            <div className='ui two column centered grid'>
                <div className='column ui styled accordion'>
                    {renderedItems}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Accordion;