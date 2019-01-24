import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';


class CrudRoutes extends Component {
    static propTypes = {
        cruds: PropTypes.arrayOf(PropTypes.shape({
            baseRoute: PropTypes.string.isRequired,
            component: PropTypes.any.isRequired,
        })),
    };

    render() {
        return <div>
            {this.props.cruds.map((item) => {
                let listRoute = item.baseRoute;
                if (listRoute.toString().endsWith("/")) {
                    listRoute = listRoute.toString().substr(0, listRoute.length - 1);
                }
                const routes = {
                    list: listRoute,
                    create: listRoute + "/new",
                    edit: listRoute + "/:id/edit",
                    ...item.routes
                };
                return <div key={item.baseRoute}>
                    <Route exact path={routes.list} component={item.component}/>
                    <Route exact path={routes.create} component={item.component}/>
                    <Route exact path={routes.edit} component={item.component}/>
                </div>;
            })}
        </div>
    }
}

export default CrudRoutes;