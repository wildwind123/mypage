import {Component} from 'react';
import './button.css';

class Button extends Component {
    render() {
        return <div className="button">
            <div className="buttonChild" onClick={this.props.changePage} button={this.props.button}>
                {this.props.children}
            </div>
        </div>;
    }
}

export default Button;