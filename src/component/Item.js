import React from 'react';
import Input from './Input';
import Button from './Button';

class Item extends React.Component {
  state = { isEdit: false };

  _toggleInput = () => this.setState({ isEdit: !this.state.isEdit });

  render() {
    const { value, onEdit, onRemove, id } = this.props;
    const { isEdit } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#a9c6de',
          padding: 16,
          margin: 16,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 170,
          borderRadius: 10,
          minWidth: 200
        }}
      >
        <div style={{ padding: 16 }}>
          {isEdit ? (
            <Input
              value={value}
              onSubmit={value => {
                onEdit({ id, value });
                this._toggleInput();
              }}
            />
          ) : (
            <h5 style={{ color: '#05004e', margin: 16, lineHeight: '35px' }}>
              {value}
            </h5>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button value='Edit' onClick={this._toggleInput} />
            <Button value='Delete' onClick={() => onRemove(id)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
