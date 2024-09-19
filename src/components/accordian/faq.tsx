import React from 'react';
import AccordianView from './accordianView';
import faqData from "./faq.json";

const Faq = () => {
  return (
    <div className='faq-container'>
        <h3>FAQs</h3>
        {faqData.map((faq)=>{
            return <AccordianView faq={faq}/>
        })}
    </div>
  )
}

export default Faq