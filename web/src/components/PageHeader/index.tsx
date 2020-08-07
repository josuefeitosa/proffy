import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import proffyLogo from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface IPageHeaderProps {
  text: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ text, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={proffyLogo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{text}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
