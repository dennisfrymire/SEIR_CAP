import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

state = {
    quotes: [],
    baseURL: "http://quotes.rest/quote/search.json?category=",
    query: '',
    apikey: 'uHPg8TAWchNSTx6G0YigpQeF',
    

}
render() {
    return(
    <h1>Search Bar</h1>
    )
    }
};

export default Search;