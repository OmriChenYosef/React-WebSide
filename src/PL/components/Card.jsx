import React from "react";
import CardBootstrap from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';




function Card(props) {


    return  <CardBootstrap  style={{position:"relative" , width: '100%',height:"100%" ,margin: "2%" ,display: "inline-block" }}>
      <CardBootstrap.Img style={{ padding: '1px', borderRadius:"5%" ,height:"50%", width:"100%"}}  variant="top" src={props.imgSrc} />
      <CardBootstrap.Body>
        <CardBootstrap.Title>{props.title}</CardBootstrap.Title>
        <CardBootstrap.Text>
        {props.text.split(' ').slice(0, 45).join(' ') + '...'}
        </CardBootstrap.Text>
      </CardBootstrap.Body>
      <CardBootstrap.Body>
        <CardBootstrap.Link onClick={()=> {props.onClick(props.id)}} style={{position:"absolute" , bottom:"5px" }}  href="#">View post</CardBootstrap.Link>
       
      </CardBootstrap.Body>
    </CardBootstrap>
   
  
};

export default Card;
