import React, { Component } from "react";
import NavBar from "./NavBar";

class Palindrom extends Component {
  state = {
    result: "",
    search: "",
  };
  onChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value,
    });
  };
  isPalindrome = () => {
    console.log("Checking for ", this.state.search);
    let str = this.state.search;
    let string1 = str.match(/[a-z0-9]/g);
    let string2 = str.match(/[a-z0-9]/g).reverse();
    console.log("string1: ", string1, "//// string2: ", string2);
    if (string1.toString() === string2.toString()) {
      this.setState({
        result: `Great, "${this.state.search}" is a palindrom!`,
      });
    } else {
      this.setState({
        result: `Sorry, "${this.state.search}" is not a palindrom...`,
      });
    }
  };
  render() {
    return (
      <div className="palindrome">
        <NavBar />
        <div className="context">
          <h1>Palindrome</h1>
          <h2>
            <i>A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. The word “palindrome” was first coined by the English playwright Ben Jonson in the 17th century, from the Greek roots palin (“again”) and dromos (“way, direction”). — src. Wikipedia</i>
          </h2>
          <br></br>
          <i>
            Type words and we will check are they palindrome
          </i>
          <form>
            <input
              type="text"
              placeholder="Enter something..."
              onChange={this.onChangeHandler}
            />
            <button type="button" onClick={this.isPalindrome}>
              Check
            </button>
            <p>{this.state.result}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Palindrom;
