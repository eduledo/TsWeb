import React, {Component} from 'react';
import PropTypes from "prop-types";

class InputText extends Component {
    static propTypes = {
        required: PropTypes.bool,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
    };

    render() {
        const {required, name, label, value, onChange, disabled} = this.props;
        const requiredAttr = (required) ? ('required') : null;
        return (
            <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor={name}>{label} {
                    required && <span className="required">*</span>
                }
                </label>
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" id={name} name={name} required={requiredAttr}
                           value={value} onChange={onChange} disabled={disabled}
                           className="form-control col-md-7 col-xs-12"/>
                </div>
            </div>

        );
    }
}

export default InputText;