import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as Bootstrap from 'bootstrap';

export class MenuItem {
    name: string;
    url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}

export class NavBarProperties {
    menuItems: MenuItem[];
    name: string;
    selected: string;
    constructor(menuNames: MenuItem[], name: string, selected: string) {
        this.menuItems = menuNames;
        this.name = name;
        this.selected = selected;
    }
}

export class NavBar extends React.Component<NavBarProperties, undefined> {
    render() {
        var menus = new Array<any>();
        this.props.menuItems.map(i => {
            menus.push((<li className={this.props.selected === i.name ? "active" : ""}><a href={i.url}>{i.name}</a></li>));
        });
        return (<nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle collapsed" aria-expanded="false" aria-controls="navbar" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/Home"><img className="brand-image" src="./images/favicon.png" /></a>
                </div>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        {menus}
                    </ul>
                </div>
            </div>
        </nav>);
    }
}

export class BodyLayout extends React.Component<undefined, undefined>{
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-s-12 col-md-12 col-lg-12">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

var menuItems = new Array<MenuItem>();
menuItems.push(new MenuItem("Repertoire", "/Repertoire"),
    new MenuItem("Teaching", "/Teaching"),
    new MenuItem("Contact", "/Contact"));
export { menuItems as MenuItems };
