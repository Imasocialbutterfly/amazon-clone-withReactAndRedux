import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await auth.signOut();
      
      dispatch(logout());
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <header className="min-w-[1000px] ">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt=""
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver To</div>
            <div className="text-sm xl:text-base font-bold">South Africa</div>
          </div>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="flex items-center m-4">
          {user ? (
            // If the user is logged in, show the greeting and logout link
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Hello, {user.email}</div>
              <div className="text-sm xl:text-base font-bold">
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // If the user is not logged in, show the sign-in link
            <div className="pr-4 pl-4">
              <Link to={"/login"}>
                <div className="text-xs xl:text-sm">Hello, Sign In</div>
                <div className="text-sm xl:text-base font-bold">
                  Accounts & Lists
                </div>
              </Link>
            </div>
          )}
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
