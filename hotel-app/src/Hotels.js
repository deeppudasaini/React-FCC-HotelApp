import React from 'react'
import Hotel from './Hotel'
export default function Hotels(props) {
    return (
        <section>
        <div className="title">
            <h2> {props.allHotels.length==0?"No Hotels Left":"Our Hotels"}</h2>
            <div className="underline"></div>
           
        </div>
        <div>
 {
                props.allHotels.map((singleHotel)=>{
                    return <Hotel key={singleHotel.id} singleHotel={singleHotel} removeHotels={props.removeHotels} />
                })
            }
        </div>
        </section>
    )
}
