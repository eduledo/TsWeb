import React, {Component} from 'react';

class Row extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h2>{this.props.title}</h2>
                            {/*<ul className="nav navbar-right panel_toolbox">*/}
                                {/*<li><a className="collapse-link"><i className="fa fa-chevron-up"/></a>*/}
                                {/*</li>*/}
                                {/*<li className="dropdown">*/}
                                    {/*<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"*/}
                                       {/*aria-expanded="false"><i className="fa fa-wrench"/></a>*/}
                                    {/*<ul className="dropdown-menu" role="menu">*/}
                                        {/*<li><a href="#">Settings 1</a>*/}
                                        {/*</li>*/}
                                        {/*<li><a href="#">Settings 2</a>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}
                                {/*</li>*/}
                                {/*<li><a className="close-link"><i className="fa fa-close"/></a>*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                            <div className="clearfix"/>
                        </div>
                        <div className="x_content">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Row;