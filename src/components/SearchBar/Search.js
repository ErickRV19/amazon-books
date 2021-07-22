import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
    constructor(props){
        super(props);
    }
    
    onChangeEvent= e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){

    
    return (
        <div>
            <input type="text" onChange={this.onChangeEvent} />
        </div>
    )
}
}

Search.propTypes = {

}

export default Search
