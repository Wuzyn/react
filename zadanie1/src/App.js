import React from 'react';
import './App.css';

const post1 = {
    heading: {
        title: "Sample blog post 1",
        subtitle: "January 1, 2014 by Mark"
    },
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
};

const post2 = {
    heading: {
        title: "Sample blog post 2",
        subtitle: "December 23, 2013 by Jacob"
    },
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
};

const list1 = {
    header: "Archives",
    items: ["March 2014", "February 2014","January 2014","December 2013","November 2013","October 2013","September 2013"]
};

const list2 = {
    header: "Elsewhere",
    items: ["GitHub", "Twitter", "Facebook"]
}

function HeaderItem(props) {
    return (
        <div className="header-item">{props.text}</div>
    )
}

function Header() {
    return (
        <header className="app-header">
            <HeaderItem text="Home"/>
            <HeaderItem text="New features"/>
            <HeaderItem text="Press"/>
            <HeaderItem text="New hires"/>
            <HeaderItem text="About"/>
        </header>
    )
}

function Title(props) {
    return (
        <div className="app-title">
            <h1>{props.title}</h1>
            <h5>{props.subtitle}</h5>
        </div>
    )
}

function PostHeading(props) {
    return (
        <div className="blog-heading">
            <h1>{props.data.title}</h1>
            <h5>{props.data.subtitle}</h5>
        </div>
    )
}

function PostBody(props) {
    return (
        <div className="blog-body">
            {props.text}
        </div>
    )
}

function Post(props) {
    return (
        <div className="blog-post">
            <PostHeading data={props.data.heading}/>
            <PostBody text={props.data.body}/>
        </div>
    )
}

function About(props) {
    return (
        <div className="about">
            <div className="title">{props.title}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

function List(props) {
    return (
        <div className="list">
            <div>{props.data.header}</div>
            <ul>
            {
                props.data.items.map(item => {
                    return <li>{item}</li>
                })
            }
            </ul>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Title title="The Bootstrap Blog" subtitle="An example blog template built with Bootstrap."/>
            <div className="app-body">
                <div className="body-posts">
                    <Post data={post1}/>
                    <Post data={post2}/>
                </div>
                <div className="body-right">
                    <About title="About" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."/>
                    <List data={list1}/>
                    <List data={list2}/>
                </div>
            </div>
        </div>
    );
}

export default App;
