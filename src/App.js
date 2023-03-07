import React, { Component } from "react";
import "./index.css";
import Form from "./components/form";
import List from "./components/list";
export default class App extends Component {
  state = {
    data:[{todo:"cooking"}]
  }
  handleSubmit =(newVal)=>{
  this.setState({data:[...this.state.data,newVal]})
  }
  
  render() {
    const data = this.state;
    return (
      <div className="app">
        <Form onSubmit={this.handleSubmit} />
        <h1>To do list</h1>
        <List todo={data}/>
      </div>
    );
  }
}
