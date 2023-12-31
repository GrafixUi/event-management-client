import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png"
import MobileSidebar, {showLink} from "./Mobileside/Mobileside";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Hello User",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <img className="img-2 " src={Logo} alt="" />
          </Link>

        </div>
        <div className="links">
          {/* <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span> */}
          <div className="contain">
            <div className="w-full flex items-center justify-between py-4 relative">
              <MobileSidebar
                show={showLink}
                setShow={setShowLink}
                setLoginModal={setLoginModal}
              />
              <div className="flex items-center gap-2 h-full justify-between w-[50%] sm:w-fit">
                <span onClick={() => setShowLink(true)} className="lg:hidden mt-1">
                  <FaBars size={25} />
                </span>
              </div>
              {/* <>
            <div
              onClick={() => {
                navigate("/");
                setLoginModal(true);
              }}
              className="cursor-pointer hidden sm:flex"
            >
              Create Events
            </div>
            <NavLink
              to="/join"
              className={`border py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-sm font-semibold ${active ? "text-primary border-primary" : ""
                }`}
            >
              Login
            </NavLink>
          </> */}
            </div>
          </div>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user flex  items-center justify-center text-center gap-3 max-sm:hidden" onClick={() => setOpen(!open)}>
              <img
                src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                alt=""
              />
              <span className=" max-sm:hidden">{currentUser?.username}</span>
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Events
            </Link>
            <Link className="link menuLink" to="/">
              Movies
            </Link>
            <Link className="link menuLink" to="/">
              Upcoming Events
            </Link>
            <Link className="link menuLink" to="/">
              Upcoming Movies
            </Link>
            <Link className="link menuLink" to="/">
              Venus
            </Link>
            <Link className="link menuLink" to="/">
              How it works?
            </Link>

          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;