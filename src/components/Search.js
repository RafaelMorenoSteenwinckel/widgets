import React, {useState, useEffect} from 'react';
import Wiki from './wiki.api';

const Search = () => {

    const [terms, setTerms] = useState('Isle of man');
    const [results, setResults] = useState([]);
    const [debouncedTerms, setDebouncedTerms] = useState(terms);
    const [isLoading, setIsLoading] = useState([]);
    
    
    useEffect(() => {

        const timerId = setTimeout(() => {
            setDebouncedTerms(terms)
        }, 500);

        return () => {
            clearTimeout(timerId);
        };

    }, [terms]);

    useEffect(() => {
        const search = () => {
            setIsLoading(true);
            Wiki.get(
                '/api.php',
                {
                    params: {
                        srsearch: debouncedTerms,
                        origin: '*'
                    }
                }
            ).then ((response) => {
                setResults(response.data.query.search);
            }).finally(()=> {
                setIsLoading(false);
            })
        };
        search();
    }, [debouncedTerms]);

    const onChange = (event) => {
        setTerms(event.target.value);
    };

    const classLoad = isLoading ? 'right icon loading' : '';

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button">
                        See
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                        
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className={`${classLoad}`}>
                    <input 
                        className='field'
                        type='text' 
                        value={terms}
                        onChange={onChange}    
                        placeholder="Search..."
                    />
                    <i className="icon"></i>    
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
                
    );
};

export default Search;
