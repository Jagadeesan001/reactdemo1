import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import objectitems from './obj';
import Output from './component/output';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='mainbox'>
    {
      objectitems.map(item => {
        return <Output img={item.image} para={item.para} />
      }
      )
    }
  </div>
);
