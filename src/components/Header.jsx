import { useState } from "react";
import { Link } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//icons
import {
  faMagnifyingGlass,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [navigation, setNavigation] = useState(false);

  function handleNavigation() {
    setNavigation(!navigation);
  }

  return (
    <header className="grid grid-cols-header justify-around gap-x-5 gap-y-5 px-5 py-3 border border-b-gray/50">
      {/* Brand */}
      <a
        href="/"
        className="text-primary font-bold tracking-widest text-2xl text-center"
      >
        MOVIE NEWS
      </a>
      {/* Search Bar */}
      <div className="col-span-3 row-start-2 lg:col-start-2 lg:row-start-1 lg:col-span-1">
        <form
          className="flex border border-gray/50 rounded-full :border-red hover:border-black"
          action="/search"
        >
          <input type="search" className="w-full rounded-l-full px-5 focus:outline-none" placeholder="Movie name..." />
          <button type="submit" className="px-2 py-1 rounded-r-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      {/* Navbar */}
      <nav className="hidden gap-5 items-center justify-end col-span-2 md:flex lg:col-span-1">
        <Link to="/" className="hover:text-secondary hover:underline">
          Home
        </Link>
        <Link to="/" className="hover:text-secondary hover:underline">
          Movies
        </Link>
        <Link to="#" className="hover:text-secondary hover:underline">
          genres
        </Link>
        <a href="#">
          <button className="border border-gray/50 rounded-full px-3 py-1 text-gray hover:border-white hover:bg-primary hover:text-white">
            Login | Signup
          </button>
        </a>
      </nav>
      {/* Menu Button */}
      <button onClick={handleNavigation} className="flex items-center justify-center col-start-3 max-w-32 place-self-end px-5 py-1 md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
      {/* Navigation */}
      {navigation && (
        <div className="fixed w-full h-full bg-black/50 top-0 left-0" onClick={handleNavigation}>
          <div className="absolute w-1/2 h-full bg-white top-0 right-0" onClick={(e)=> e.stopPropagation()}>
            <button onClick={handleNavigation} className="absolute top-5 right-5 text-2xl">
              <FontAwesomeIcon icon={faX} />
            </button>
            <ul className="mt-20 flex flex-col gap-5 px-5">
              <Link to="/" className="hover:text-secondary hover:underline">
                Home
              </Link>
              <Link to="/" className="hover:text-secondary hover:underline">
                Movies
              </Link>
              <Link to="#" className="hover:text-secondary hover:underline">
                genres
              </Link>
              <a href="#">
                <button className="border border-gray/50 rounded-full px-3 py-1 text-gray hover:border-white hover:bg-primary hover:text-white">
                  Login | Signup
                </button>
              </a>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
