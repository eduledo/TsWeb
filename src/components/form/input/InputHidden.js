import React, {Component} from 'react';
import BaseInput from "./BaseInput";

class InputHidden extends Component {
    render() {
        const type = "hidden";
        const props = {...this.props, type};
        return <BaseInput {...props}/>
    }
}

export default InputHidden;