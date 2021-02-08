import {Component} from 'react';
import "./template.css";
import Button from './button';

class Template extends Component {
    
    constructor(props) {
        super(props);
        this.selectedPage = "about";
        this.setButtons(this.selectedPage);
        this.state = {
            selectedPage : this.selectedPage,
            nextPage : this.nextPage,
            backPage : this.backPage
        }
        this.changePage = this.changePage.bind(this)
        document.title = this.props.pages[this.selectedPage]?.label;
    }

    setButtons(selectedPage) {
        var currentIndex = 0;
        var pageIndex = [];
        var lastIndex = 0;
        Object.entries(this.props.pages).forEach(([key]) => {
            var index = pageIndex.push(key) - 1;
            
            if (  key === selectedPage) {
                currentIndex = index;
            }
            lastIndex = index;
        })
        
        var backButton = currentIndex - 1;
        if ( backButton < 0) {
            backButton = lastIndex;
        } 
        
        var nextButton = currentIndex + 1;
        if (nextButton > lastIndex) {
            nextButton = 0;
        }
        this.nextPage = pageIndex[nextButton];
        this.backPage = pageIndex[backButton];
        this.selectedPage = selectedPage;
    }
    
    changePage(e) {
        this.setButtons(e.target.attributes.getNamedItem('button').value);
        this.setState(
            {
                selectedPage : this.selectedPage,
                nextPage: this.nextPage,
                backPage: this.backPage
            }
        )
        document.title = this.props.pages[this.selectedPage]?.label;
    }

    render() {
        return <div className="template">
            <div className="template-content">
                <div className="button back">
                    <Button changePage={this.changePage} button={this.backPage}>
                        {this.props.pages[this.state.backPage]?.label}
                    </Button>
                </div>
                <div className="content">
                    <div className="label">{this.props.pages[this.state.selectedPage]?.label}</div>
                    <div className="info">
                        {this.props.pages[this.state.selectedPage]?.info}
                    </div>
                </div>
                <div className="button next" >
                    <Button changePage={this.changePage}  button={this.nextPage}>
                        {this.props.pages[this.state.nextPage]?.label}
                    </Button>
                </div>
            </div>
        </div>
    }
}

export default Template;