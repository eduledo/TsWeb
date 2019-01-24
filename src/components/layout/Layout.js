import React, {Component} from 'react';

import "../../vendors/bootstrap/dist/css/bootstrap.min.css";
import "../../vendors/font-awesome/css/font-awesome.min.css";
import "../../vendors/nprogress/nprogress.css";
import "../../custom.css";

import {Sidebar, TopNav, MainContent, Footer} from './index';

class Layout extends Component {
    render() {
            document.body.classList.toggle('footer_fixed', true);
        return (
            <div className="container body">
                <div className="main_container">
                    <Sidebar showLogoutButton={true} {...this.props}/>
                    <TopNav {...this.props}/>
                    <MainContent {...this.props} />
                    <Footer {...this.props}/>
                </div>
            </div>
        )
    }
}

export default Layout;