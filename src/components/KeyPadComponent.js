import React, {Component} from 'react';

class KeyPadComponent extends Component {

    // Layout what the keyboard should look like
    keys = [ 
        '(', 'CE', ')', 'C', 
        '1', '2', '3', '+', 
        '4', '5', '6', '-', 
        '7', '8', '9', '*',
        '.', '0', '=', '/'
    ];

    render() {
        return (
            <div className="button">
                {
                    this.keys.map((key) => {
                        return(<button name={key} onClick={e => this.props.onClick(e.target.name)}>{key}</button>)
                    })
                }
            </div>
        );
    }
}

export default KeyPadComponent;