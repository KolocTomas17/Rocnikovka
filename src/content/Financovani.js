import Footer from "../footer/Footer";
import Navbar from "./Navbar";
import Img from "../img/marketing.jpg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Finanovani = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="container con">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-12 post">
                <article className="columns featured">
                  <div className="column is-7 post-img ">
                    <img src={Img} alt="" />
                  </div>
                  <div className="column is-5 featured-content">
                    <div>
                      <h1 className="title post-title">Financování vozu</h1>
                      <p>
                        Vozidlo můžete zakoupit přímo na naší pobočce nebo po telefonu
                        v pohodlí vašeho domova. Vše za Vás zařídíme. Stačí si k
                        nám přijet akorát pro klíčky a odjet.
                      </p>
                      <br />
                      <p>
                        Pokud budete chtít vozidlo na splátky, není problém.
                        Domluvíme se s Vámi, i s vaší bankou, ať máte co
                        nejvýhodnější splácení.
                      </p>
                      <br />
                      <ul className="navbar-item">
                        <button class="button">
                          <CustomLink to="/" className="btns">
                            Zpět na přehled
                          </CustomLink>
                        </button>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <footer className="footer">
      <div className="content has-text-centered is-fixed-bottom">
        <p>
          © 2023 <strong>AutobazarPro</strong> | Všechna práva vyhrazena
        </p>
      </div>
    </footer>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Finanovani;
