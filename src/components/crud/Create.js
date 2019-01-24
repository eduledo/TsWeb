import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Layout, Row} from "../layout";
import {Form} from "../form";

class Create extends Component {
    static propTypes = {
        mainTitle: PropTypes.string.isRequired,
        secondaryTitle: PropTypes.string.isRequired,
        entity: PropTypes.object,
        properties: PropTypes.object.isRequired,
        listRoute: PropTypes.string.isRequired,
        onSave: PropTypes.func.isRequired,
    };

    render() {
        const form = <Form
            entity={this.props.entity}
            onSubmit={(data) => {
                this.props.onSave(data);
                this.props.history.push(this.props.listRoute);
            }}
            onCancel={() => this.props.history.push(this.props.listRoute)}
            properties={this.props.properties}/>;

        const row = <Row
            title={this.props.mainTitle}
            content={form}
        />;

        return (
            <Layout
                pageTitle={this.props.secondaryTitle}
                content={row}
            />
        );
    }
}

export default Create;