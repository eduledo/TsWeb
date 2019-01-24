import React, {Component} from 'react';
import MenuItem from "./MenuItem";

class MenuSection extends Component {
    render() {
        const {title, items, selectedItem} = this.props.data;
        return (
            <div className="menu_section">
                {title && (<h3>{title}</h3>)}
                <ul className="nav side-menu">
                    {items && items.sort((a, b) => {
                        if (a.order && b.order) {
                            return a.order - b.order
                        }
                        return 0;
                    }).map((item) => {
                        const isSelected = selectedItem ? selectedItem === item.id : false;
                        return <MenuItem key={item.id} data={{...item, isSelected}}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default MenuSection;