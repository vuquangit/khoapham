import React, { Component } from 'react';
import Button from './Button';
export class Input extends Component {
  state = { editedValue: '' };
  componentDidMount() {
    this.setState({ editedValue: this.props.value });
  }
  _onChange = e => this.setState({ editedValue: e.target.value });

  render() {
    const { onSubmit } = this.props;
    const { editedValue } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '16px 0'
        }}
      >
        <input
          value={editedValue}
          onChange={this._onChange}
          style={{ marginRight: 16, width: '80%' }}
        />
        <Button value='Submit' onClick={() => onSubmit(editedValue)} />
      </div>
    );
  }
}

export default Input;
