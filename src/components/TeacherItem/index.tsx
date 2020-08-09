import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://lh3.googleusercontent.com/ogw/ADGmqu-xAhpsbEaIqR-yOmLjOva7z6e2cpKtbH3sMN1c=s83-c-mo'
          alt='Sensui Junior'
        />
        <div>
          <strong>Sensui Junior</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado em explodir coisas em laboratório e por mudar a vida das pessoas através de
        experiencias
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
