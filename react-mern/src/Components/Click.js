import React, { Component } from 'react'

export class Click extends Component {
    constructor(props) {
      super(props)
   
      this.state = {
        message: "Subscribe",
         count: 0
         
      };
    }
    UpdateClick=()=>{
        this.setState({ count:this.state.count+1});

    };
    UpdateText = () =>{
      this.setState({message:"Subscribed"});
    }
  render() {
    const {count,message} = this.state;
    return (
      <div>
        <button onClick={this.UpdateClick}>Clicked {count} times</button><br/>
        <button onClick={this.UpdateText}>{message}</button>
      </div>
    )
  }
}

export default Click
