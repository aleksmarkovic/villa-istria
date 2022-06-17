import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenus from "./BurgerMenus";
import Script from "next/script";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  const [isRoot, setIsRoot] = useState(true);

  useEffect(() => {
    setPath(router.pathname);

    if (router.pathname !== "/") {
      setIsRoot(false);
    } else {
      setIsRoot(true);
    }
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

    if (isRoot) {
      scrollTop >= 1
        ? header.classList.add("sticky-header")
        : header.classList.remove("sticky-header");
    }
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></Script>

        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WMDKJTD');`,
          }}
        />

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
        </Script>

        <title>Villa Istria</title>
        <link rel="icon" href="assets/img/logo/znak1.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <div
          className={
            isRoot ? "transparent-header" : "transparent-header sticky-header"
          }
        >
          <div className="container-fluid px-0">
            <div className="header-space">
              <div className="row align-items-center">
                <div className="col-xl-2 col-8">
                  <div className="header-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/img/logo/horizontala1.svg"
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
                          <Link href="/contact">
                            <a>Contact</a>
                          </Link>
                        </li>
                        {/* <li className="menu-item-has-children">
                          <Link href="/places-to-visit">
                            <a>Extra Content</a>
                          </Link> */}
                        {/* <ul className="sub-menu">
                            <li>
                              <Link href="/places-to-visit">
                                <a>Places to Visit</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/local-products">
                                <a>Local Products</a>
                              </Link>
                            </li>
                          </ul> */}
                        {/* </li> */}
                      </ul>
                    </nav>
                  </div>
                  <div className="side-menu-icon d-xl-none text-end mr-10">
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
                      <a
                        href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                        target="_blank"
                      >
                        <i>
                          <FontAwesomeIcon icon={["fab", "facebook"]} />
                        </i>
                      </a>
                      <a
                        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                        target="_blank"
                      >
                        <i>
                          <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </i>
                      </a>
                    </div>
                    <div className="header-btn mr-10">
                      {/* <Link > */}
                      <a
                        className="theme-btn theme-btn-small"
                        target="_blank"
                        href={process.env.NEXT_PUBLIC_EUROTOURS_URL}
                      >
                        Book now
                      </a>
                      {/* </Link> */}
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
