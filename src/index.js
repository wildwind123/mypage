import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template'
import Text from "./components/text";
import './style.css';

const node = document.getElementById("root");
const template = React.createElement(Template, {
pages : {
    about : {
        label: "About",
        info: <Text>
            - Hello in my simple page.
            My name is Petr. Everything i want to do can be done with programming. Most of all, 
            i like to automate routine work. Because it gives a person time for creativity in life.
             </Text>
    },
    contact : {
        label : "Contact",
        info : <Text> E-mail: a-y-t-a-l@mail.ru
        </Text>
    },
    github : {
        label : "GitHub",
        info : <Text> - On my github profile you can see approximately what programming language i know. 
            And what i approximately can do. But these projects are crude, 
            as i mostly made for myself.
            <br/>
            <br/>
            <a href="https://github.com/wildwind123" target="&quot_blank">GitHub</a>
        </Text>
    }
    }
});

ReactDOM.render(template, node)