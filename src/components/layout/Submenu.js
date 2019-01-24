import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Submenu extends Component {
    render() {
        const {childs, isSelected} = this.props.data;

        return (
            <ul className="nav child_menu" style={isSelected ? {display: 'block'} : null}>
                {childs && (childs.map((item) =>
                    <li key={item.id}>
                        <Link to={item.action ? item.action : "#"} onClick={null}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Submenu;