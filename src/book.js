import React, { Component } from 'react';
import './App.css';

class Book extends Component {
    state = {
        hide: true,
    }
    toggleDetails = () => this.setState({ hide: !this.state.hide })
    render() {
        let display;
        if (this.state.hide === false) {
            display = <div>
                <h3>{this.props.bookDetails.subtitle}</h3>
                <h3>{this.props.bookDetails.author}</h3>
                <p>Published in {this.props.bookDetails.published}</p>
                <p>Publisher: {this.props.bookDetails.publisher}</p>
                <p>Pages: {this.props.bookDetails.pages}</p>
                <p>{this.props.bookDetails.description}</p>
                <a href={this.props.bookDetails.website}>Book link</a>
            </div>
        } else { display = null }
        return (
            <div>
                <h2 onClick={this.toggleDetails}>{this.props.bookDetails.title}</h2>
                {display}
            </div>
        );
    }
}

export default Book;
