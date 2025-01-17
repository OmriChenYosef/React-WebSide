
import React, { useState, useEffect } from 'react';
import Header from '../PL/components/header.jsx';
import Footer from '../PL/components/Footer.jsx';
import PrimarySearchAppBar from '../PL/components/PrimarySearchAppBar.jsx';
import DisplyCards from '../PL/DisplyCards.jsx';

function homePage() {

const [SearchBarPostButton, setSearchBarPostButton] = useState(false);

const SearchBarPostButtonCliked =() =>{
    setSearchBarPostButton(true)
}

return (
  <div className="container-page" style={{ position: "relative" }}>
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <PrimarySearchAppBar PostButtonCliked={() =>SearchBarPostButtonCliked()} />
      {SearchBarPostButton ? <DisplyCards />: <h2> You can clike on Post button menu bar to see Posts or search Post by title  </h2>} 
      <Footer />
    </div>
  </div>
);

}

export default homePage;