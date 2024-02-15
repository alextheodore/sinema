import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import data from './../data.json'

function DetailCards(props) {
  return (
    <div className="card_detail">
        <Card src={props.value}/>
    </div>
  )
}

export default DetailCards