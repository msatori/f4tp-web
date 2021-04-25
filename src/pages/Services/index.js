import { React } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Services() {
    return (
        <section className="service-wrapper">
            <div className="mask">
                <h1> Fresh. Local. Organic. </h1>
            </div>
            <div className="service-content">
                <div className="heading-wrapper">
                    <h1>Services</h1>
                </div>
                <div className="text-wrapper">
                    <p>
                        We happily provide a miriad of services, but above all we just love bringing beautiful, fresh flowers to the homes of Madisonians. If you are looking for something that you do not see listed below, feel free to contact me.
                    </p>
                </div>
            </div>
        </section>
    )
};