import React, { useState, useEffect } from "react";
import Header from "../PL/components/header.jsx";
import Footer from "../PL/components/Footer.jsx";
import PrimarySearchAppBar from "../PL/components/PrimarySearchAppBar.jsx";
import DisplyCards from "../PL/DisplyCards.jsx";
import videoFile from '../../public/225954.mp4'


function homePage() {
  const [SearchBarPostButton, setSearchBarPostButton] = useState(false);
  const [SearchBarSearch, setSearchBarSearch] = useState(false);
  const [searchValue1, setSearchValue1] = useState(null);

  //call back to PrimarySearchAppBar
  const SearchBarPostButtonClicked = () => {
    setSearchBarPostButton(true);
    setSearchValue1(null);
  };

  //call back to PrimarySearchAppBar
  const SearchBarSearchClicked = (searchValue) => {
    setSearchValue1(searchValue);
    setSearchBarSearch(true);
  };



  return (
    <div className="container-page" style={{ position: "relative" }}>
      <div className="page" style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <PrimarySearchAppBar PostButtonCliked={() => SearchBarPostButtonClicked()} SearchCliked={(text) => SearchBarSearchClicked(text)} />
        {SearchBarSearch || SearchBarPostButton ? (<DisplyCards byTitle={searchValue1} />) : (
          <div> <video autoPlay loop muted playsInline width="100%" height="100%" >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>)}
        <Footer />
      </div>
    </div>
  );
}

export default homePage;
