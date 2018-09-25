import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from './Form';

const MovieWrapper = styled.div`
    background-color: grey;
    `

export default class MovieApp extends Component {
    render() {
        return (
            <MovieWrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </MovieWrapper>
        );
    }
}