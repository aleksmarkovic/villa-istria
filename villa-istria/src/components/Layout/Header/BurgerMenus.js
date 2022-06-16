import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);
  const [project, setProject] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
    } else if (menu == "blog") {
      setHome(false);
      setBlog(!blog);
    }
  };

  return (
    <div className="fix">
      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <button className="side-info-close" onClick={() => setMenuOpen(false)}>
          <i>
            <FontAwesomeIcon icon={["fas", "times"]} />
          </i>
        </button>
        <div className="side-info-content">
          <div className="mm-menu">
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
              {/* <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a
                  onClick={() => {
                    openMobileMenu("blog");
                  }}
                >
                  Extra Content
                </a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
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
              </li> */}
            </ul>
          </div>
          <div className="contact-infos mb-30">
            <div className="contact-list mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <img
                    src="assets/img/icon/sidebar-icon-1.png"
                    className="img-fluid"
                    alt="icon-img"
                  />
                  Ulica Velog Jože 15a <br />
                  Vabriga (Tar-Vabriga, Poreč) 52465, Istria, Croatia
                </li>
                <li>
                  <img
                    src="assets/img/icon/footer-icon-1.png"
                    className="img-fluid"
                    alt="icon-img"
                  />
                  <a href={`mailto:${process.env.NEXT_PUBLIC_INFO_EMAIL}`}>
                    {process.env.NEXT_PUBLIC_INFO_EMAIL}
                  </a>
                </li>
                <li>
                  <img
                    src="assets/img/icon/footer-icon-2.png"
                    className="img-fluid"
                    alt="icon-img"
                  />
                  <a href={`tel: ${process.env.NEXT_PUBLIC_INFO_TEL}`}>
                    {process.env.NEXT_PUBLIC_INFO_TEL}
                  </a>
                </li>
              </ul>
              <div className="sidebar__menu--social">
                <a href={process.env.NEXT_FACEBOOK_URL} target="_blank">
                  <i>
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </i>
                </a>
                <a href={process.env.NEXT_INSTAGRAM_URL} target="_blank">
                  <i>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
