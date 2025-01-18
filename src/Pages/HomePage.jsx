
import React, { useState, useEffect } from 'react';
import Header from '../PL/components/header.jsx';
import Footer from '../PL/components/Footer.jsx';
import PrimarySearchAppBar from '../PL/components/PrimarySearchAppBar.jsx';
import DisplyCards from '../PL/DisplyCards.jsx';

function homePage() {

const [SearchBarPostButton, setSearchBarPostButton] = useState(false);
const [SearchBarSearch, setSearchBarSearch] = useState(false);
const [searchValue1, setSearchValue1] = useState(null); // Use state for searchValue1

const SearchBarPostButtonClicked =() =>{
    setSearchBarPostButton(true);
    setSearchValue1(null);
}

const SearchBarSearchClicked =(searchValue) =>{
 
    setSearchValue1(searchValue);
    setSearchBarSearch(true);
}

return (
  <div className="container-page" style={{ position: "relative" }}>
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      <Header/>
      <PrimarySearchAppBar PostButtonCliked={() =>SearchBarPostButtonClicked()} SearchCliked={(text) =>SearchBarSearchClicked(text)} />
      {SearchBarSearch || SearchBarPostButton  ? <DisplyCards byTitle ={searchValue1} />: <h2> You can clike on Post button menu bar to see Posts or search Post by title  </h2>} 
      <Footer />
    </div>
  </div>
);

}

export default homePage;