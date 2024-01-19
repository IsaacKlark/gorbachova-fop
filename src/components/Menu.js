import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from "../assets/images/dashboard.svg";
import { ReactComponent as ProductIcon } from "../assets/images/product.svg";
import { ReactComponent as CustomersIcon } from "../assets/images/customers.svg";
import { ReactComponent as IncomeIcon } from "../assets/images/income.svg";
import { ReactComponent as PromoteIcon } from "../assets/images/promote.svg";
import { ReactComponent as HelpIcon } from "../assets/images/help.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as ArrowRight } from "../assets/images/arrowRight.svg";
import { useLocation } from 'react-router-dom';
import { fakeUser } from "../assets/fakeData";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const { pathname } = useLocation();

  return (
    <nav className="menu">
      <div className="menu_top">
        <button className="menu__mobileMenuButton" onClick={() => setDisplayMenu(!displayMenu)}>☰</button>
        <div className="menu__logoWrapper">
          <Logo />
          <p className="menu__logoText">
            v.01
          </p>
        </div>
      </div>

      <ul className={displayMenu ? "" : "menu__mobileHidden"}>
        <li>
          <Link to="/dashboard">
            <div className={pathname === "/dashboard" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <DashboardIcon />
                Dashboard
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <div className={pathname === "/product" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <ProductIcon />
                Product
              </div>
              <ArrowRight className="menu__arrow" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <div className={pathname === "/customers" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <CustomersIcon />
                Customers
              </div>
              <ArrowRight className="menu__arrow" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/income">
            <div className={pathname === "/income" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <IncomeIcon />
                Income
              </div>
              <ArrowRight className="menu__arrow" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/promote">
            <div className={pathname === "/promote" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <PromoteIcon />
                Promote
              </div>
              <ArrowRight className="menu__arrow" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/help">
            <div className={pathname === "/help" ? "menu__link--active" : "menu__link"}>
              <div className="menu__wrapper">
                <HelpIcon />
                Help
              </div>
              <ArrowRight className="menu__arrow" />
            </div>
          </Link>
        </li>
      </ul>

      <div className="menu__bottomWrapper">
        <img src={fakeUser.img} alt={fakeUser.name} className="menu__userImage" />
        <div>
          <p className="menu__userName">{fakeUser.name}</p>
          <p className="menu__userPosition">{fakeUser.position}</p>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
