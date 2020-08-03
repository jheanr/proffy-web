import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
  avatar_url: string;
  name: string;
  subject: string;
  description: string;
  price: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar_url} alt={props.name}/>

        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>

      <p>{props.description}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{props.price}</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;