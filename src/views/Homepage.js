import React, { Component } from "react";
import { getAll } from "../BooksAPI";
import BookShelf from "../components/BookShelf";
import Search from "../components/Search";

class Homepage extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>Jayzer's Books App</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title="Currently reading" books={this.props.currentlyReading} />
          <BookShelf title="Want to read" books={this.props.wantToRead} />
          <BookShelf title="Read" books={this.props.read} />
        </div>
        <Search />
      </div>
    );
  }
}

export default Homepage;
