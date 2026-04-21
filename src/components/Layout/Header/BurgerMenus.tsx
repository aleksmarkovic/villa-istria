import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface BurgerMenusProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenus = ({ setMenuOpen, menuOpen }: BurgerMenusProps) => {
  const [home, setHome] = useState(false);
  const [blog, setBlog] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu: string): void => {
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/booking">Booking</Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="menu-item-has-children">
                <a target="_blank" href={process.env.NEXT_PUBLIC_RENTLIO_URL}>
                  Book now
                </a>
              </li>
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
                <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank">
                  <i>
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </i>
                </a>
                <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank">
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
