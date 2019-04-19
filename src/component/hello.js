import React, { Component } from 'react';

class Hello extends Component {
  //Props: thuoc tinh it thay doi
  //state: trang thai
  constructor(props){
    super(props);   
    this.state ={tongHocVien:  parseInt(this.props.tongHocVien)};
    this.addStudent = this.addStudent.bind(this);
  }

  layThongTin() {
    alert(123);
  };

  addStudent(){
    this.setState({tongHocVien: this.state.tongHocVien + 1});
  };

 
  render() {
    return (
      <div>
          <h1>{this.props.ten} - {this.props.giangvien}</h1>
          <div>So hoc vien: {this.state.tongHocVien}</div>
          <h4>{this.props.children}</h4>
          <button onClick={this.layThongTin} >Thong tin</button>
          <button onClick={this.addStudent} >Thêm học viên</button>
      </div>
    );
  }
}

export default Hello;