import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Book/components/Books';
import './index.css';
import $ from 'jquery';

export const API_URL = 'http://localhost:3000';

$.get({
  url: `${API_URL}/books.json`
})
.then(books => ReactDOM.render(<Books books={books} />, document.getElementById('root')))
.catch(error => console.log(error))
