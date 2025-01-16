import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from "./components/Card.jsx";
import PrimarySearchAppBar from './components/PrimarySearchAppBar.jsx';

                          // Icons


function App() {
  return   <div>

             <div className='page' style={{display: 'flex' ,flexDirection: "column"}} >
                 <Header/>
                 <PrimarySearchAppBar/>       
                <div className='container'  >
                 <Card title="The team" text="text" imgSrc="https://fzstage.ssf.ae/upload/vouchers/img-world-including-5-vat-1700564667144.jpg" />
                 <Card title="The team" text="text" imgSrc="https://fzstage.ssf.ae/upload/vouchers/img-world-including-5-vat-1700564667144.jpg" />
                 <Card title="The team" text="text" imgSrc="https://fzstage.ssf.ae/upload/vouchers/img-world-including-5-vat-1700564667144.jpg" />
                  <Card title="The team" text="text" imgSrc="https://fzstage.ssf.ae/upload/vouchers/img-world-including-5-vat-1700564667144.jpg" />
                 <Card title="The team" text="text" imgSrc="https://fzstage.ssf.ae/upload/vouchers/img-world-including-5-vat-1700564667144.jpg" />
                
                </div>
                <Footer />
           </div>

        
          </div>
}
export default App