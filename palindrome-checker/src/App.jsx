import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    result : "test",
    search : "",
  }
  onChangeHandler = (e) => {
    console.log(e.target.value)
    this.setState({
      search : e.target.value,
    })
  }
  isPalindrome =()=> {
    console.log("Checking for ",this.state.search)
    let str = this.state.search;
    let string1 = str.match(/[a-z0-9]/g);
    let string2 = str.match(/[a-z0-9]/g).reverse();
    console.log("string1: ",string1, "//// string2: ", string2);
    if (string1.toString() === string2.toString()) {
      this.setState({
        result : `Great, "${this.state.search}" is a palindrom!`,
      })
    } else {
      this.setState({
        result: `Sorry, "${this.state.search}" is not a palindrom...`,
      });
    }
  }
  render() {
    return <div className="App">
      <h1>Palindrome Checker</h1>
      <h2>Let's check if your word is a palindrom. Enter something here.</h2>
      <form>
        <input type="text" placeholder="Enter something..." onChange={this.onChangeHandler}/>
        <button type="button" onClick={this.isPalindrome}>Check</button>
        <p>{this.state.result}</p>
      </form>
    </div>;
  }
}

export default App;
