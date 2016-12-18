import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'jquery';
import * as Bootstrap from 'bootstrap';
import {NavBar, MenuItems, BodyLayout} from '../base';

ReactDOM.render((<div>
                    <NavBar menuItems={MenuItems} name="Lucie Bebbington-Lewis" selected="Repertoire" />
                    <BodyLayout>
                    </BodyLayout>
                </div>), document.getElementById('bebbiweb'));

