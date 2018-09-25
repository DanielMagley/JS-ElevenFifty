import React, { Component } from 'react';
import styled from 'styled-components';
import FormResults from './FormResults';

const Search = styled.input`
    width: 350px;
    margin: 10px 0 10px 0;
    color: green;
    padding: 10px
`

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
}

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = (e) => {
        const key = '0a4241ec24d20d77b06540496d4074ec';
            
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                return;
            }
                    
            response.json().then(data => {
                const results = data.results;
                this.setState({ results });
                });
            })
        
            .catch(err => {
                console.log('Fetch Error :-S', err);
            })
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
                <Search onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a Movie" required />
                {this.state.results === [] ? (<div></div>): (<FormResults results={this.state.results} />)}
            </form>
        );
    }
}