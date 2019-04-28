import React, { Component } from 'react';
import './App.css';
/*import Hello from './component/hello';
import InputTag from './component/InputTag';*/
import BaiTap1 from './component/vd1';
import ReactDOM from 'react-dom';

var list;
export class InputDiv extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
  }

  send() {
    list.setState({
      mang: list.state.mang.concat(this.refs.txtInput.value)
    });
    ReactDOM.unmountComponentAtNode(document.getElementById('add-div'));
  }

  render() {
    return (
      <div>
        <input type='text' ref='txtInput' placeholder='Enter here..' />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

function addDiv() {
  ReactDOM.render(<InputDiv />, document.getElementById('add-div'));
}

class App extends Component {
  constructor(props) {
    super(props);
    list = this;
    this.state = {
      mang: ['Khoa', 'Quang', 'Hang'],
      valueEdited: ''
    };

    this.updateItem = this.updateItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  removeItem(id) {
    this.setState({
      mang: this.state.mang.filter((val, index) => index !== id)
    });
    //console.log("Delete item: "+ removeIndex);
    //console.log(this.state.mang);
  }

  updateItem({ key, value }) {
    console.log('Item: ' + value);

    this.setState(
      {
        valueEdited: value
      },
      () => this.saveItem(key)
    );

    console.log('Update item: ' + this.state.valueEdited);
    console.log('Update Mang: ' + this.state.mang);
  }

  saveItem(id) {
    console.log('item Save: ' + this.state.valueEdited);

    let arr = [...this.state.mang];
    arr[id] = this.state.valueEdited;
    this.setState({
      mang: arr,
      valueEdited: ''
    });

    console.log('Save item: ' + this.state.valueEdited);
    console.log('Save mang: ' + this.state.mang);
  }

  render() {
    return (
      <div className='div-list'>
        {/*<InputTag/>
        <Hello ten="Quang" giangvien="khoapham" tongHocVien="10" >children: Mon hoc React 1</Hello>
        <Hello ten="Quang" giangvien="Mr Pho" tongHocVien="20">children: Mon hoc React 2</Hello>
        */}
        <div id='add-div' />
        <button onClick={addDiv}>Add</button>
        {this.state.mang.map((value, index) => (
          <BaiTap1
            key={index}
            id={index}
            deleteItem={() => this.removeItem(index)}
            updateItem={this.updateItem}
            saveItem={this.saveItem}
          >
            {value}
          </BaiTap1>
        ))}
      </div>
    );
  }
}

export default App;