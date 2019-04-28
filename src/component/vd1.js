import React, { Component } from 'react';
import './vd1.css';

class BaiTap1 extends Component {
  constructor(props) {
    super(props);
    this.state = { onEdit: false };
    this.cancelItem = this.cancelItem.bind(this);
  }

  editItem() {
    this.setState({ onEdit: true });
  }

  cancelItem() {
    this.setState({ onEdit: false });
  }

  render() {
    if (this.state.onEdit) {
      return (
        <div className='div-note'>
          <input defaultValue={this.props.children} ref='txtitem' />
          <button
            onClick={() => {
              this.props.updateItem({
                key: this.props.id,
                value: this.refs.txtitem.value
              });
              this.cancelItem();
            }}
          >
            Save
          </button>
          <button onClick={this.cancelItem}>Cancel</button>
        </div>
      );
    } else {
      return (
        <div className='div-note'>
          <p>{this.props.children}</p>
          <button onClick={this.editItem.bind(this)}>Edit Item</button>
          <button onClick={this.props.deleteItem}>Delete</button>
        </div>
      );
    }
  }
}

export default BaiTap1;
