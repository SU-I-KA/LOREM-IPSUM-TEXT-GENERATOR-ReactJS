import React, { Fragment } from 'react';

const Paragraph = ({text, validEntry})=>{

    if(!validEntry){
        return(
          <h2 className='error'>please enter a valid number</h2>
        )
    }

    return(
        <Fragment>
        {
            text.map((p, index)=>{
                return(
                <p className='single-paragraph' key={index}>{p}</p>
                )
            
            })
        }
        </Fragment>

    )
}

export default Paragraph;