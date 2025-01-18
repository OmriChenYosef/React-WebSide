import React from "react";
import CardBootstrap from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';




function Card(props) {

  return (
    <CardBootstrap style={{ position: "relative", width: '100%', height: "100%", margin: "2%", display: "inline-block", overflow: "hidden" }}>
      <CardBootstrap.Img style={{ padding: '1px', borderRadius: "5%", height: "50%", width: "100%" }} variant="top" src={props.imgSrc} />



      <CardBootstrap.Body>
        <CardBootstrap.Title >{props.title}</CardBootstrap.Title>

        <CardBootstrap.Text >
          {props.text}
        </CardBootstrap.Text>

      </CardBootstrap.Body>



      <CardBootstrap.Footer onClick={() => { props.onClick(props.id) }} style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        backgroundColor: "#4635B1"
      }} >View post

      </CardBootstrap.Footer>



    </CardBootstrap>)


};

export default Card;
