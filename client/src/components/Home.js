import React from 'react'
import { Container } from 'react-bootstrap';
import AnimalList from './AnimalList';
//import HeaderImage from './HeaderImage';
import InputSerach from './search/InputSerach';

const Home = () => {
    return (
        <Container>
        <div className="search_bar">
        <InputSerach />
        </div>
        <div className="animal_list">
        <AnimalList /> 
        </div>
        </Container>
    )
}

export default Home
