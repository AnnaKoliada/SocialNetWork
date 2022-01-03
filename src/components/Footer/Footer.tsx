import React from 'react';
import s from './Footer.module.css';

function Footer() {
  return (
      <footer className={s.footer}>
       <div className = {s.footerLogo}> <a href='#d'>SocialNetWork</a></div>
      </footer>

  );
}

export default Footer;
