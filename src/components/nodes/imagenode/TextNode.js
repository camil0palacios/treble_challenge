import React from 'react';

export class TextNode extends React.Component {
    constructor(props) {
        super(props);
        this.state =  { 
            value: 'Some text', 
            textStyle: { width: 200 }
        };
        this.clearText = this.clearText.bind(this);
        this.changeText = this.changeText.bind(this);
    }
    
    clearText() {
        if (this.state.value === 'Some text') {
            this.setState({ value: '' });
        }
    }

    changeText(event) {
        this.setState({ value: event.target.value });
        this.changeWidth();
    }

    changeWidth() {
        this.setState({ 
            textStyle: { width: Math.max(200, (this.state.value.length + 1) * 20 - 10) }
        });
    }

    render() {
        return(
            <label> 
                <input 
                    className="some-text"
                    style={this.state.textStyle}
                    type="text" 
                    value={this.state.value} 
                    onClick={this.clearText}
                    onChange={this.changeText}
                /> 
            </label>
        )
    }
}