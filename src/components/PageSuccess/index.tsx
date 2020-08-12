import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

interface PageSuccessProps {
  title: string;
  description: string;
  link: string;
  textLink: string;
}

const PageSuccess: React.FC<PageSuccessProps> = ({
  title,
  description,
  link,
  textLink,
}) => {
  return (
    <div id="page-success">
      <div id="page-success-content" className="container">
        <img src={successIcon} alt="Success icon" />

        <h2>{title}</h2>

        <p>{description}</p>

        <Link to={link}>{textLink}</Link>
      </div>
    </div>
  );
};

export default PageSuccess;
