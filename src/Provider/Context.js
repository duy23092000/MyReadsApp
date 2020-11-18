import React, { Component } from "react";
export const Context = React.createContext();

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentReading: [],
      wantToRead: [],
      read: [],
      addBooks: (books) => {
        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const read = books.filter((book) => book.shelf === "read");
        const wantToRead = books.filter((book) => book.shelf === "wantToRead");
        this.setState({ books, currentlyReading, read, wantToRead });
      },
    //   moveBooks: (book, shelf) => {

    //   }
    };
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
