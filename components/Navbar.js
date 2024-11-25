import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuToggle = document.getElementById("menu-toggle");
      const navbar = document.querySelector(".navbar");

      // Chiude il menu se si clicca fuori dall'hamburger o dal menu
      if (menuToggle.checked && !navbar.contains(e.target)) {
        menuToggle.checked = false;
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <input type="checkbox" id="menu-toggle" className="check" />
      <label htmlFor="menu-toggle">
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
      </label>
      <ul>
        <Link href="/" passHref>
          <a>
            <li>Home</li>
          </a>
        </Link>

        <Link href="/articles" passHref>
          <a>
            <li>Archive</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}
