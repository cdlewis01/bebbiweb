import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Description extends React.Component<undefined, undefined>{
        render(){
            return <div>Overview Description of what I do</div>
        }
}

ReactDOM.render(<Description />, document.getElementById('bebbiweb-home'));