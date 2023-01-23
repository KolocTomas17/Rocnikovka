import Logo from '../img/logo.png';

const Nav = () => {
    return(
<nav className="navbar py-4 navbar is-fixed-top">
  <div className="container is-fluid">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img
          className="image"
          src={Logo}
          alt=""
          width="110px"
        />
      </a>
      <a
        className="navbar-burger"
        role="button"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="#">
          Koupě
        </a>
        <a className="navbar-item" href="#">
          Financování
        </a>
        <a className="navbar-item" href="#">
          Kariéra
        </a>
        <a className="navbar-item" href="#">
          O Nás
        </a>
      </div>

      <div class="navbar-end">
            <a class="navbar-item is-active">
              Zaregistrovat se
            </a>
            <a class="navbar-item is-active">
              Přihlásit se
            </a>
        </div>

      <div className="navbar-item">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="search"
              placeholder="BMW, Audi..."
              aria-label="Search"
            />
          </div>
          <div className="control">
            <button className="button" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ width: 24, height: 24 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>            
    </div>
  </div>
</nav>



    

    );
};

export default Nav;