import React from 'react'
import { Container } from 'react-bootstrap';
import AnimalList from './AnimalList';
//import HeaderImage from './HeaderImage';
import InputSerach from './search/InputSerach';

const Home = () => {
    return (
        <Container>
        <div className="search_bar shadow-lg p-3 mb-5 bg-white rounded mt-2">
        <InputSerach />
        </div>
        <div className="animal_list">
        <AnimalList /> 
        </div>
        </Container>
    )
}

export default Home
