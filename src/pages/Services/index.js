import { React } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
//photo imports
import csa from '../../assets/images/csa.jpeg';
import deco from '../../assets/images/deco.jpeg';

export default function Services() {
    return (
        <section className="service">
           <MDBContainer>
                <div className='service-img-wrapper'>
                    <img src={csa} alt='Bouquet' />
                </div>
                <h1>Services</h1>
                <div className="service-text">
                    <p>In addition to the Eastside Farmers Market, we happily provide services for private events as well as a summertime CSA subscription</p>
                </div>
           </MDBContainer>
        </section>
    )
};