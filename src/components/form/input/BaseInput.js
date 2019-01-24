import React, {Component} from 'react';

class BaseInput extends Component {
    render() {
        let {name, id, type, value} = this.props;
        if (type == null) {
           type = "text"
        }
        const properties = {
            id,
            name,
            type,
            value,
        };

        return <input {...properties}/>
    }
}

export default BaseInput;