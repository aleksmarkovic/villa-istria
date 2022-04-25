import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenus from "./BurgerMenus";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".transparent-header");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky-header")
      : header.classList.remove("sticky-header");
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <title>Villa Istria</title>
        <link rel="icon" href="assets/img/logo/znak1.svg" />
      </Head>
      <header>
        <div className="transparent-header">
          <div className="container-fluid">
            <div className="header-space">
              <div className="row align-items-center">
                <div className="col-xl-2 col-8">
                  <div className="header-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/img/logo/logo.svg"
                          className="img-fluid"
                          alt="logo-img"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-4">
                  <div className="main-menu d-xl-block d-none">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="menu-item-has-children">
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>About</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/gallery">
                            <a>Gallery</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/service">
                            <a>Pricing</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/project">
                            <a>Contact</a>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/blog">
                            <a>Extra Content</a>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/blog">
                                <a>Places to Visit</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog-details">
                                <a>Local Products</a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="side-menu-icon d-xl-none text-end">
                    <button
                      className="side-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <i>
                        <FontAwesomeIcon icon={["fas", "bars"]} />
                      </i>
                    </button>
                  </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                  <div className="header-right text-end">
                    <div className="header-social">
                      <a href="#" target="_blank">
                        <i>
                          <FontAwesomeIcon icon={["fab", "facebook"]} />
                        </i>
                      </a>
                      <a href="#" target="_blank">
                        <i>
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </i>
                      </a>
                    </div>
                    <div className="header-btn">
                      <Link href="/about">
                        <a className="theme-btn theme-btn-small">
                          Check availability
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default Header;
