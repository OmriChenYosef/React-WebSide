import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplyCardDetails from "../PL/DisplyCardDetails";
import Header from "../PL/components/header.jsx";
import Footer from "../PL/components/Footer.jsx";

function PostDetailsPage() {
  const { id } = useParams();

  return (
    <div className="container-page" style={{ position: "relative" }}>
      <div className="page" style={{ display: "flex", flexDirection: "column" }} >
        <Header />
        <div className="box">
          <DisplyCardDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PostDetailsPage;
