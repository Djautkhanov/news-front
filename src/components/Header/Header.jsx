import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [opened, setOpened] = useState(false);
  const [haveAccaunt, setAccaunt] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setOpened(!opened);
    setAccaunt(false);
  };

  const handleHaveAccaunt = () => {
    setAccaunt(true);
    setOpened(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <span>ALL NEWS</span>
        </Link>
      </div>
      <div className="header-contact">
        <div className="user" onClick={handleClick}>
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-user-100-most-used-icons-flaticons-flat-flat-icons-2.png"
            alt=""
          />
        </div>
        {opened ? (
          <div className="user-enter">
            <div className="authori">Pегистрация</div>
            <div className="user-inp">
              <span>Ввидите Имя</span>
              <input type="text" placeholder="Имя" value={firstName} />
            </div>
            <div className="user-inp">
              <span>Ввидите Фамилия</span>
              <input type="text" placeholder="Фамилия" value={lastName}/>
            </div>
            <div className="user-inp">
              <span>Ввидите Логин</span>
              <input type="text" placeholder="Логин" value={login}/>
            </div>
            <div className="user-inp">
              <span>Ввидите пароль</span>
              <input type="text" placeholder="Пароль" value={password}/>
            </div>
            <button className="user-btn">Зарегистрироваться</button>
            <button className="user-btn-have" onClick={handleHaveAccaunt}>
              Уже есть аккаунт
            </button>
          </div>
        ) : (
          ""
        )}
        {haveAccaunt ? (
          <div className="accaunt">
            <div className="authori-accaunt">Войти</div>
            <div className="user-inp">
              <span>Ввидите Логин</span>
              <input type="text" placeholder="Логин"  value={login}/>
            </div>
            <div className="user-inp">
              <span>Ввидите пароль</span>
              <input type="text" placeholder="Пароль" value={password}/>
            </div>
            <button className="user-btn-accaunt">Войти</button>
            <button className="user-btn-have" onClick={handleClick}>
              Нет аккаунта
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
