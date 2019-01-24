import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuSection from "./MenuSection";
import { auth } from "../../firebase";
import { menu, users } from "../../actions";

class Sidebar extends Component {
    state = {
        loading: false,
    };

    componentWillMount() {
        this.props.fetchMenuItems();
    }

    componentDidMount() {
        const { authUser, user, fetchUser } = this.props;

        if ((authUser && authUser.uid) &&
            ((!user && !this.state.loading && !this.state.loaded) ||
                (user && user.uid !== authUser.uid))
        ) {
            fetchUser(authUser.uid);
        } else if (user && this.state.loading) {
            this.setState({ loading: false });
        }
    }

    render() {
        document.body.classList.toggle('nav-md', this.props.sidebarOpen)
        document.body.classList.toggle('nav-sm', !this.props.sidebarOpen)
        const {
            title,
            authUser,
            showSettingsButton,
            showFullscreenButton,
            showLockScreenButton,
            showLogoutButton,
            menuItems,
            selectedItem,
            user,
        } = this.props;
        let menuSections = {};
        let mItems = [];
        if (user) {
            mItems = menuItems.filter((item) => {
                if (user.roles.indexOf("ROLE_SUPER_ADMIN") > -1) {
                    return true;
                }

                if (!item.role) {
                    return true;
                }

                if (user.roles.indexOf(item.role) > -1) {
                    return true;
                }

                return false;
            });
        }

        for (let i = 0; i < mItems.length; i++) {
            let sectionId = "main";
            var item = mItems[i];
            if (!item.hasOwnProperty('parent')) {
                if (item.hasOwnProperty("section")) {
                    sectionId = item.section.name;
                    if (!menuSections.hasOwnProperty(sectionId)) {
                        menuSections[sectionId] = {
                            order: 1,
                            ...item.section,
                            items: [],
                        };
                    }
                } else {
                    if (!menuSections.hasOwnProperty(sectionId)) {
                        menuSections[sectionId] = {
                            name: sectionId,
                            title: null,
                            items: [],
                            order: 0,
                        }
                    }
                }
                menuSections[sectionId].items.push(item);
            }

        }
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <div className="navbar nav_title" style={{ border: 0 }}>
                        <a href="/" className="site_title"><span>{title}</span></a>
                    </div>

                    <div className="clearfix" />

                    <div className="profile clearfix">
                        <div className="profile_pic">
                            <img src="images/img.jpg" alt="..." className="img-circle profile_img" />
                        </div>
                        <div className="profile_info">
                            <span>Welcome,</span>
                            <h2>{authUser.email}</h2>
                        </div>
                        <div className="clearfix" />
                    </div>

                    <br />


                    <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                        {menuSections && Object.keys(menuSections).sort((a, b) => {
                            if (menuSections[a].hasOwnProperty('order') && menuSections[b].hasOwnProperty('order')) {
                                return menuSections[a].order - menuSections[b].order;
                            }
                            return 0;
                        }).map((key) => <MenuSection
                            key={menuSections[key].name}
                            data={{ ...menuSections[key], selectedItem }}
                        />)}
                    </div>


                    <div className="sidebar-footer hidden-small">
                        {showSettingsButton && (
                            <a data-toggle="tooltip" data-placement="top" title="Settings">
                                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                            </a>

                        )}
                        {showFullscreenButton && (
                            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                                <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                            </a>
                        )}
                        {showLockScreenButton && (
                            <a data-toggle="tooltip" data-placement="top" title="Lock">
                                <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                            </a>
                        )}
                        {showLogoutButton && (
                            <button data-toggle="tooltip" data-placement="top" title="Logout" onClick={(event) => {
                                event.preventDefault();
                                auth.doSignOut();
                            }}>
                                <span className="glyphicon glyphicon-off" aria-hidden="true" />
                            </button>
                        )}
                    </div>

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
    user: state.userState.currentUser,
    menuItems: state.menuState.menuItems,
    selectedItem: state.menuState.current,
    sidebarOpen: state.menuState.sidebarOpen,
});

export default connect(
    mapStateToProps,
    {
        fetchMenuItems: menu.fetchMenuItems,
        fetchUser: users.fetch
    }
)(Sidebar);