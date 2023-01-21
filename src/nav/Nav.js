

const Nav = () => {
    return(
<nav className="navbar py-4 navbar is-fixed-top">
  <div className="container is-fluid">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img
          className="image"
          src="https://bulma.io/images/bulma-logo.png"
          alt=""
          width="96px"
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
          About
        </a>
        <a className="navbar-item" href="#">
          Company
        </a>
        <a className="navbar-item" href="#">
          Services
        </a>
        <a className="navbar-item" href="#">
          Testimonials
        </a>
      </div>
      <div className="navbar-item">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="search"
              placeholder="Search"
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