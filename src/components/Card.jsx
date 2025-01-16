import React from "react";
import CardBootstrap from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props) {

    return  <CardBootstrap style={{ width: '30%' ,margin: "20px" ,display: "inline-block" }}>
      <CardBootstrap.Img style={{ padding: '1px', borderRadius:"5%" ,height:"180px", width:"100%"}}  variant="top" src={props.imgSrc} />
      <CardBootstrap.Body>
        <CardBootstrap.Title>{props.title}</CardBootstrap.Title>
        <CardBootstrap.Text>
        {props.text}
        </CardBootstrap.Text>
      </CardBootstrap.Body>
      
      <CardBootstrap.Body>
        <CardBootstrap.Link href="#">View page</CardBootstrap.Link>
       
      </CardBootstrap.Body>
    </CardBootstrap>
  
};

export default Card;
