import React from 'react'
import { IoStar } from '@react-icons/all-files/io5/IoStar'
import { IconContext } from "react-icons";



const ReviewSlider = () => {
    return (
        <section className="row">
        {reviewData && reviewData.map(({id, name, review}) => (
                <article key={id} className="review-article col-12 col-md-3">
                    <h3>{name}</h3>
                    <p>{review}</p>
                    <div className="rating"> 
                        <IoStar className="icon"/>
                        <IoStar className="icon"/> 
                        <IoStar className="icon"/> 
                        <IoStar className="icon"/> 
                        <IoStar className="icon"/>    
                    </div>
                </article>
            ))}
            
        </section>
    )
}

export default ReviewSlider

export const reviewData = [
    {
        id: "1",
        name: 'Joël',
        review: `The level of service at Moving Company is fantastic. 
        Having been since my first move, I am consistently 
        impressed by the professionalism of every staff member I have come in 
        contact with. Thank you!`,
        rating:'5',
    }, {
        id: "2",
        name: 'Daymon',
        review: `Just wanted to write to say thank you for the service you provided for helping us relocate. You were extremely courteous, very professional, knowledgeable, and prompt. 
        Everything went according to schedule en tight planning.Thank you again`,
        rating:'5',
    }, {
        id: "3",
        name: 'Billiet',
        review: `Our complete office was moved to a different state. 
        All in 3 days time! We ordered the packing service and "unpack & install" service. We opened the door to our new office and could start the same day. 
        Their care for our furniture was excellent.`,
        rating:'5',
    }
]