import React,{useState} from 'react'

export default function Hotel({singleHotel,removeHotels,key}) {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={singleHotel.image}/>
            <footer>
                <div className="toure-info">
                    <h4>{singleHotel.name}</h4>
                    <h4 className="tour-price">${singleHotel.price}</h4>
                    
                </div>
                <p>{
                readMore?singleHotel.info:singleHotel.info.substring(0,200)+'...'
                }
                <button onClick={()=>readMore?setReadMore(false):setReadMore(true)}>{readMore?"Show Less":"Read More"}</button>
                </p>
                <button className="delete-btn" onClick={()=>
                {
                    removeHotels(singleHotel.id);
                }}>Not Interested</button>
            </footer>

        </article>
    )
}

