import React from 'react';
import loader from '../../../assets/images/loader.svg';
import s from './Loader.module.css';


const Loader = (props: any)=>{
  return (<div className={s.loader}>
    <img src={loader} alt="" />
</div>);
};
export default Loader;