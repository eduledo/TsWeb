import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {menu} from '../../actions';

import Submenu from "./Submenu";
import {connect} from "react-redux";

class MenuItem extends Component {
    render() {
        const {id, title, icon, action, childs, isSelected} = this.props.data || {};
        const onClick = (!action && childs) ? (event) => {
            event.preventDefault();
            this.props.setSelectedItem(isSelected ? null : id);
        } : null;

        return (
            <ul className="nav side-menu">
                <li className={isSelected ? "active" : null}>
                    <Link to={action ? action : "#"} onClick={onClick}>
                        {icon && (<i className={"fa " + icon}/>)}
                        {title}
                        {childs && <span className="fa fa-chevron-down"/>}
                    </Link>
                    {childs && <Submenu data={{childs, isSelected}}/>}
                </li>
            </ul>
        )
    }
}

export default connect(null, {setSelectedItem: menu.toggleOpenedItem})(MenuItem);