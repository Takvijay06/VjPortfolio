import React from 'react';

interface IRating{
  count:number;
}
const Rating = (props: IRating)=>{
  const {count} = props;
  return (<div className='rating'>
    {Array.from({length:count}).map(()=><i className="fa-solid fa-star"></i>)}
  </div>)
}

const Skills = () => {
  return (
    <section>
        <div className="container">
          <h1>--Skills</h1>
          <div className="flex">
            <div className="skill-list">
              <ul>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> ReactJs <Rating count={5}/> </li>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> Typescript <Rating count={4}/> </li>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> Javascript <Rating count={5}/> </li>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> NodeJs <Rating count={4}/> </li>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> Redux & Redux-Toolkit <Rating count={5}/></li>
                <li className='flex'><i className="fa-solid fa-circle-check"></i> HTML & CSS <Rating count={4}/> </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills;