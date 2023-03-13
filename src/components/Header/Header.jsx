import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, authorization } from "../../features/user.Slice";
import "./Header.css";
const Header = () => {
  const [opened, setOpened] = useState(false);
  const [haveAccaunt, setAccaunt] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signindUp = useSelector((state) => state.userSlice.signingUp); // Зарегистрирован
  const signindIn = useSelector((state) => state.userSlice.signingIn); // выполнен вход
  const error = useSelector((state) => state.userSlice.error);

  const handleClick = () => {
    setOpened(!opened);
    setAccaunt(false);
  };

  const handleHaveAccaunt = () => {
    setAccaunt(true);
    setOpened(false);
  };
  const handlesigningUp = () => {
    dispatch(addUser({ firstName, lastName, login, password }));
    setFirstName("");
    setLastName("");
    setLogin("");
    setPassword("");
    if (signindUp) {
      setTimeout(() => {
        handleClick();
      }, 4000);
    }
  };

  const handleSigningIn = () => {
    dispatch(authorization({ login, password }));
    setLogin("");
    setPassword("");
    if(signindIn){
      setTimeout(() => {
        setOpened(false);
        setAccaunt(false)
      }, 4000)
    }
  };

  const handelInputName = (e) => {
    setFirstName(e.target.value);
  };
  const handelInputLastName = (e) => {
    setLastName(e.target.value);
  };
  const handelInputLogin = (e) => {
    setLogin(e.target.value);
  };
  const handelInputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <div>ALL NEWS</div>
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
              <div>Ввидите Имя</div>
              <input
                type="text"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => handelInputName(e)}
              />
            </div>
            <div className="user-inp">
              <div>Ввидите Фамилия</div>
              <input
                type="text"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => handelInputLastName(e)}
              />
            </div>
            <div className="user-inp">
              <div>Ввидите Логин</div>
              <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => handelInputLogin(e)}
              />
            </div>
            <div className="user-inp">
              <div>Ввидите пароль</div>
              <input
                type="text"
                placeholder="Пароль"
                value={password}
                onChange={(e) => handelInputPassword(e)}
              />
            </div>
            {signindUp ? (
              <div className="authComplete">Вы успешно зарегистрировались</div>
            ) : (
            <div className="auth-error">{error}</div>
            )}
            <button
              className="user-btn"
              onClick={() => handlesigningUp()}
              disabled={
                login && password && firstName && password ? false : true
              }
            >
              Зарегистрироваться
            </button>
            <button className="user-btn-have" onClick={() => handleHaveAccaunt()}>
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
              <div>Ввидите Логин</div>
              <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={handelInputLogin}
              />
            </div>
            <div className="user-inp">
              <div>Ввидите пароль</div>
              <input
                type="text"
                placeholder="Пароль"
                value={password}
                onChange={handelInputPassword}
              />
            </div>
            {signindIn ? (
              <div className="authComplete">Вы успешно вошли</div>
            ) : (
              <div className="auth-error">{error}</div>
            )}
            <button
              className="user-btn-accaunt"
              disabled={login && password ? false : true}
              onClick={() => handleSigningIn()}
            >
              Войти
            </button>
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
