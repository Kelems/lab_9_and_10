import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Nav = () => (
  <div className="container">
    <header>
      <div>9-10 лаба</div>
    </header>
    <nav>
      <button>
        <Link to="/">Главная страница</Link>
      </button>
      <button>
        <Link to="/sign-in" className="Link">
          Авторизация
        </Link>
      </button>
      <button>
        <Link to="/profile" className="Link">
          Страница пользователя
        </Link>
      </button>

      <Button
        label="Удалить профиль"
        click={() => {
          localStorage.clear();
          window.location.reload();
        }}
      />
    </nav>
  </div>
);

export default Nav;
