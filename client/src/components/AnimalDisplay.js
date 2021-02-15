import React from 'react'
import {  Card } from 'react-bootstrap';
import './animal.css'
import { SRLWrapper } from "simple-react-lightbox";
import Moment from 'react-moment';
import 'moment-timezone';
import { BiTime } from "react-icons/bi";
import { GoLocation } from "react-icons/go";


const AnimalDisplay = ({animalPost, location}) => {
    console.log('animalpost',animalPost)
    console.log('locationpost',location)
    return (
       
        
        <div className="Container">
         <Card  className="card_detail shadow-lg  mb-5 bg-white rounded" >
         <Card.Header>{animalPost.milkPerDay} लीटर दूध 
  , {animalPost.whatTimePregnant} ब्यात, ₹ {animalPost.price}  
  {' '}|{' '} <BiTime /> <Moment date={animalPost.date} fromNow/>|
  <GoLocation /> {location.county},{location.city}
  </Card.Header>
  <SRLWrapper>
<a href={animalPost.photo[0]} data-attribute="SRL">
<Card.Img variant="top" src={animalPost.photo[0]} width='150px' height="150px" />
</a>
</SRLWrapper>
<Card.Body>
<Card.Text>ये {animalPost.bride}
 {animalPost.age} साल की है।यह 2 महीने पहलेब्यायी है अभी गभभवती  है|</Card.Text>
 <Card.Text className="d-flex justify-content-between">
 <h6>{animalPost.postedBy.name}</h6>  <h6> {animalPost.postedBy.phonenumber}</h6>
 </Card.Text>
 
</Card.Body>
             </Card>   
        </div>
       
    )
}

export default AnimalDisplay
