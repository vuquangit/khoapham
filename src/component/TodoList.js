import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Input from './Input';

export default class TodoList extends Component {
  state = {
    list: ['test', 'test2'],
    toggleModal: false
  };

  _onToggle = () => this.setState({ toggleModal: !this.state.toggleModal });

  _onAdd = item =>
    this.setState({ list: [...this.state.list, item], toggleModal: false });

  _onRemove = id =>
    this.setState({ list: this.state.list.filter((_, index) => index !== id) });

  _onEdit = ({ id, value }) =>
    this.setState({
      list: this.state.list.map((item, index) => (index === id ? value : item))
    });

  render() {
    return (
      <div
        style={{
          padding: '80px 10%',
          display: 'flex',
          justifyContent: 'left',
          height: '100vh',
          border: '1px solid #247e6c',
          borderRadius: '10px',
          background: '#eaf5ff'
        }}
      >
        {this.state.list.map((value, index) => (
          <Item
            value={value}
            onAdd={this._onAdd}
            onEdit={this._onEdit}
            onRemove={this._onRemove}
            key={index}
            id={index}
          />
        ))}
        <div style={{ position: 'absolute', top: 20, left: 20 }}>
          <Button value='Add' onClick={this._onToggle} color='#e4c666' />
        </div>
        <Modal isOpen={this.state.toggleModal} toggle={this._onToggle}>
          <ModalHeader toggle={this._onToggle}>Add new item</ModalHeader>
          <ModalBody>
            <Input value='' onSubmit={value => this._onAdd(value)} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
