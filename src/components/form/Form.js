import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {InputHidden} from './input';
import InputText from "./input/InputText";
import Combo from "./input/Combo";

class Form extends Component {

    static propTypes = {
        entity: PropTypes.object,
        properties: PropTypes.object,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.state = {data: {}};
    }

    _getInput({label, type, required, options, disabled}, key, value) {
        const onChange = (event, value) => {
            var data = this.state.data;
            if (!event && value) {
                data[key] = value;
            } else {
                data[key] = event.target.value;
            }
            this.setState({data});
        };
        switch (type) {
            case "hidden":
                return <InputHidden key={key} name={key} label={label} value={value}/>;
            case "text":
                return <InputText key={key} label={label} name={key} value={value} required={required}
                                  disabled={disabled}
                                  onChange={onChange}/>;
            case 'combo':
                return <Combo
                    key={key}
                    label={label}
                    name={key}
                    value={value}
                    required={required}
                    onChange={onChange}
                    {...options}
                />;
            default:
                return null;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.entity !== this.props.entity) {
            this.setState(() => ({
                data: nextProps.entity
            }));
        }
        return true;
    }

    render() {
        const {properties, onSubmit, onCancel, entity} = this.props;
        return (
            <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left"
                  onSubmit={(event) => {
                      event.preventDefault();
                      onSubmit(this.state.data);
                  }}>
                {Object.keys(properties).map(key => {
                    const value = (this.state.data && this.state.data.hasOwnProperty(key)) ? this.state.data[key] : "";
                    return this._getInput(properties[key], key, value);
                })}
                <div className="ln_solid"/>
                <div className="form-group">
                    <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                        <button className="btn btn-primary" type="button"
                                onClick={() => onCancel ? onCancel() : null}>Cancel
                        </button>
                        {!entity && <button className="btn btn-primary" type="reset">Reset</button>}
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </div>

            </form>
        );
    }
}

export default Form;