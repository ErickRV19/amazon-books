import React from 'react';

import Search  from '../SearchBar/Search';
import './Menu.css';
import PanelAdd from "../PanelAdd/PanelAdd";


class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

    
    return (
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {this.props.title}

                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="actions">
                    <button onClick={this.add} className="button btn-blue">Añadir nuevo libro</button>
                </div>
            </div>
            <PanelAdd />
        </div>
    )
}
}

export default Menu
