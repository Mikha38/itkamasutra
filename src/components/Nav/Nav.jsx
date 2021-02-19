import css from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={css.nav}>
            <div>
            <a href="" className={css.active}>Profile</a>
            </div>
            <div>
            <a href="">Messages</a>
            </div>
            <div>
            <a href="">News</a>
            </div>
            <div>
            <a href="">Music</a>
            </div>
            <div>
            <a href="">Settings</a>
            </div>
        </nav>
    );
}

export default Nav;