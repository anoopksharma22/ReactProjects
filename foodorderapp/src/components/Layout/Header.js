import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={style.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <img src={mealImage} alt="meals" className={style['main-image']}/>            
        </Fragment>
    );
};

export default Header;