import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'jquery';
import * as Bootstrap from 'bootstrap';
import {NavBar, MenuItems, BodyLayout} from '../base';
class Description extends React.Component<undefined, undefined>{
        render(){
            return <div className="jumbotron">
                        <h1>Piano Teaching in Wales</h1>
                        <p>Overview Description of what I have done and what I do</p> 
                    </div>
        }
}

class TestimonialQuote{
    quote: string;
    who : string;
}

class Testimonial extends React.Component<TestimonialQuote, undefined>{
    render(){
        return <blockquote className="testimonial">
                    <p>"{this.props.quote}"</p>
                    <footer>{this.props.who}</footer>
                    </blockquote>
    }
}

ReactDOM.render((<div>
                    <NavBar menuItems={MenuItems} name="Lucie Bebbington-Lewis" selected="Home" />
                    <BodyLayout>
                        <Description />
                        <Testimonial quote="She's the best teacher EVER!" who="A. Student" />
                        <Testimonial quote="She taught me everything I know!" who="A. N. Student" />
                    </BodyLayout>
                </div>), document.getElementById('bebbiweb'));