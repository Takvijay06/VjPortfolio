import React, { useState } from "react";
interface IProps {
  faq: any;
}

const AccordianView = (props: IProps) => {
  const { faq } = props;
  const [show, setShow] = useState(false);
  const onClickPlusHandler =()=>{
    setShow(!show);
  }
  return (
    <>
      <div className="qna">
        <h4>
          {faq.question}
          <span onClick={onClickPlusHandler}>{show ? "-" : "+"}</span>
        </h4>
        {show ? <p>{faq.answer}</p>:<></>}
      </div>
    </>
  );
};

export default AccordianView;
