import React, {Component} from 'react';
import PropTypes from "prop-types";

class Combo extends Component {
    static propTypes = {
        required: PropTypes.bool,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        valueProp: PropTypes.string.isRequired,
        labelProp: PropTypes.string.isRequired,
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (!nextProps.value && this.props.items && this.props.items.length > 0) {
            this.props.onChange(null, this.props.items[0][this.props.valueProp]);
        }
        return true;
    }
    render() {
        const {required, name, label, value, onChange} = this.props;
        const requiredAttr = (required) ? ('required') : null;
        return <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={name}>{label} {
                required && <span className="required">*</span>
            }
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <select className="form-control" id={name} name={name} required={requiredAttr}
                        value={value} onChange={onChange}>
                    {this.props.items && this.props.items.map((item, idx) => {
                        const selected = (item[this.props.valueProp] === value) ? 'selected' : null;
                        return <option key={item[this.props.valueProp]} value={item[this.props.valueProp]}
                                       selected={selected}>{item[this.props.labelProp]}</option>
                    })}
                </select>
            </div>
        </div>

    }
}

export default Combo;