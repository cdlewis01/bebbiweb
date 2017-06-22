import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'jquery';
import * as Bootstrap from 'bootstrap';
import { NavBar, MenuItems, BodyLayout } from '../base';

class TestimonialQuote {
    quote: string;
    who: string;
}

class Testimonial extends React.Component<TestimonialQuote, undefined>{
    render() {
        return <blockquote className="testimonial">
            <p>"{this.props.quote}"</p>
            <footer>{this.props.who}</footer>
        </blockquote>
    }
}

class BlogEntryProps {
    title: string;
    imageUrl: string;
    text: string;
}



class Header extends React.Component<undefined, undefined>{
    render() {
        return (
            <div className="header">
                <div className="header-background" />
                <div className="profile-image-container">
                    <img src="./images/headshot.jpg" alt="headshot" />
                </div>
            </div>);
    }
}

class BlogPost {
    title: string;
    date: Date;
    contents: JSX.Element;
    image_url: string;
    constructor(title: string, date: Date, contents: JSX.Element, image: string) {
        this.title = title;
        this.date = date;
        this.contents = contents;
        this.image_url = image;
    }
}

class BlogProperties {
    blogPosts: Array<BlogPost>;
}

class Blog extends React.Component<BlogProperties, undefined>{
    render() {
        var blogs = new Array<any>();
        this.props.blogPosts.map(bp => {
            blogs.push((
                <div className="blog-post">
                    <div className="page-header">
                        <div>
                            <h2 className="blog-post-title">{bp.title}</h2>
                            <h5>{bp.date.toDateString()}</h5>
                        </div>
                    </div>
                    <div className="blog-content media">
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" src={bp.image_url} />
                            </a>
                        </div>
                        <div className="media-body">
                            {bp.contents}
                        </div>
                    </div >
                </div>
            ));
        });
        return (
            <div className="blog container-fluid">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="blog-header">
                            <h1 className="blog-title">Lucie's Blog</h1>
                            <p className="blog-description">What I get up to with the piano</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-1">
                        {blogs}
                    </div>
                    <div className="col-md-2">
                        <div className="profile-container">
                            <div className="page-header">
                                <img src="./images/piano-512.jpg" />
                            </div>
                            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis suscipit</p>
                            <ol>
                                <li>Qualification 1</li>
                                <li>Qualification 2</li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div >);
    }

}
var blog1content =
    <div>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis suscipit felis eget congue. Morbi sapien urna, lacinia sed semper eu, auctor eget enim. Sed viverra lacus ipsum, ut volutpat sem pulvinar non. Vestibulum id dictum mi. Nullam a quam gravida, ultricies elit non, porttitor sem. Nam ac enim vehicula, facilisis leo et, fringilla est. Curabitur et faucibus magna. Suspendisse sed interdum risus. Mauris sit amet nulla ex. Integer et libero vel quam feugiat dictum ac pellentesque felis. Proin laoreet felis erat, sed efficitur sem mattis non. Morbi sit amet congue nunc. Donec iaculis lectus id neque interdum, et elementum ex semper. Donec ac felis vel metus luctus ultrices. Aenean volutpat magna erat, sed lobortis augue porttitor lacinia. Duis et convallis neque.</p>
    </div>;

var blog2content =
    <div>
        <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis suscipit felis eget congue. Morbi sapien urna, lacinia sed semper eu, auctor eget enim. Sed viverra lacus ipsum, ut volutpat sem pulvinar non. Vestibulum id dictum mi. Nullam a quam gravida, ultricies elit non, porttitor sem. Nam ac enim vehicula, facilisis leo et, fringilla est. Curabitur et faucibus magna. Suspendisse sed interdum risus. Mauris sit amet nulla ex. Integer et libero vel quam feugiat dictum ac pellentesque felis. Proin laoreet felis erat, sed efficitur sem mattis non. Morbi sit amet congue nunc. Donec iaculis lectus id neque interdum, et elementum ex semper. Donec ac felis vel metus luctus ultrices. Aenean volutpat magna erat, sed lobortis augue porttitor lacinia. Duis et convallis neque.</p>
    </div>;

var blogPosts = new Array<BlogPost>();
blogPosts.push(new BlogPost("Cardiff Blues - End of Season Awards", new Date(2017, 6, 5), blog1content, "./images/cardiff_blues.png"));
blogPosts.push(new BlogPost("Cwmbran Male Voice Choir", new Date(2017, 6, 5), blog2content, "./images/choir.jpg"));

ReactDOM.render((<div>
    <NavBar menuItems={MenuItems} name="Lucie Bebbington-Lewis" selected="Home" />
    <BodyLayout>
        <Header />
        <Blog blogPosts={blogPosts} />
        {/*<Testimonial quote="She's the best teacher EVER!" who="A. Student" />*/}
        {/*<Testimonial quote="She taught me everything I know!" who="A. N. Student" />*/}
        {/*<BlogEntry title="Cwmbran Male Voice Choir" text="Old men singing and chatting." imageUrl="/" />*/}
    </BodyLayout>
</div>), document.getElementById('bebbiweb'));