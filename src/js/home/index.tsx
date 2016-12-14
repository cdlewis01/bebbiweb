import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'jquery';
import * as Bootstrap from 'bootstrap';

var styles = require('../../sass/home/index.scss');

class Description extends React.Component<undefined, undefined>{
        render(){
            return <div className="alert alert-success" role="alert">Overview Description of what I do</div>
        }
}

ReactDOM.render(<Description />, document.getElementById('bebbiweb-home'));