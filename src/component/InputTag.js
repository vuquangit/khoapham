import React, { Component } from 'react';

class InputTag extends Component {
    constructor(props, context){
        super(props, context);
        this.show = this.show.bind(this);
    }

    show(){
        alert( this.refs.sl.value + ': ' + this.refs.txt.value);
    };

    render(){
        return(
            <div>
                <select ref="sl">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select>
                <input type="text" ref="txt"></input>
                <button onClick={this.show}>Hien thi</button>
            </div>
        )

    }
}

export default InputTag;