import React from 'react';

import './Footer.css';

interface Props {
  className: string,
}

const Footer: React.StatelessComponent<Props> = ({className}) => (
    <div className={className}>
      <div className="footer__container">
      </div>
    </div>
);

export default Footer;
