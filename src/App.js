import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translator from './components/Translator';

const items = [
    {
        title: 'Hus1',
        content: 'My first content'
    },
    {
        title: 'Hus2',
        content: 'My second content'
    },
    {
        title: 'Hus3',
        content: 'My third content'
    }
];

const options = [
    {
        label : 'La couleur rouge',
        value :  'red'
    },
    {
        label : 'La couleur verte',
        value :  'green'
    },
    {
        label : 'La couleur bleue',
        value :  'blue'
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <React.Fragment>

                <Header/>

                <Route path='/'>
                    <Accordion items={items}/>
                </Route>

                <Route path='/list'>
                    <Search items={items}/>
                </Route>

                <Route path='/translate'>
                    <Translator />
                </Route>

                <Route path='/dropdown'>
                    <Dropdown 
                        text="Choisir une couleur"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    ></Dropdown>
                </Route>
        </React.Fragment>
    );
        
};

export default App;