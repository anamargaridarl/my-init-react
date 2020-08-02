import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Comments from './components/Comments';
import About from './components/pages/About';
import AddComment from './components/AddComment';
import { sendHttpRequest } from './requests';

class App extends Component {

  state = {
    comments: [

    ]
  }

  getComments = () => {
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/comments/?_limit=10')
      .then(data => {
        this.setState({ comments: data })
      }).catch(err => {
        console.log(err);
      });
  };

  addComment = (name, email, body) => {
    const newComment = {
      name: name,
      email: email,
      body: body
    }
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/comments', newComment)
      .then(responseData => {
        newComment.id = responseData.id
        this.setState({ comments: [...this.state.comments, newComment] })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDelete = (id) => {
    sendHttpRequest('DELETE', 'https://jsonplaceholder.typicode.com/comments/${id}').then( () => {
      this.setState({ comments: [...this.state.comments.filter(comment => comment.id !== id)] });
    })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" render={() => (
              <React.Fragment>
                <AddComment addComment={this.addComment}></AddComment>
                <Comments comments={this.state.comments} handleDelete={this.handleDelete} />
              </React.Fragment>
            )} />
            <Route exact path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
