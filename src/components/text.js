import {Component} from 'react';
import './text.css';

class Text extends Component {
    render() {
        return <div className="text">
            {this.props.children}
        </div>;
    }
}

export default Text;