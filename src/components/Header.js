import React from 'react';
import Link from './Link';

const Header = ( onChange ) => {
    return (
        <div className="ui secondary pointing menu">
            <Link onChange={onChange} href="/" className="item"> Accordion </Link>
            <Link onChange={onChange} href="/list" className="item">Search</Link>
            <Link onChange={onChange} href="/dropdown" className="item" >DropDown</Link>
            <Link onChange={onChange} href="/translate" className="item" >Translate</Link>
        </div>
    );
}

export default Header;