import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { useLogout } from "@/hooks/useLogout";
import { useQueryClient } from "react-query";

const Header = () => {
  const { isLoggedIn } = useAuthContext();
  const { mutateAsync } = useLogout({ onSuccess: () => {} });
  const queryClient = useQueryClient();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHotelHolidays.com</Link>
        </span>

        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">
                <Button
                  variant="link"
                  className="flex items-center text-white px-3 font-bold"
                >
                  My Bookings
                </Button>
              </Link>

              <Link to="/my-hotels">
                <Button
                  variant="link"
                  className="flex items-center text-white px-3 font-bold"
                >
                  My Hotels
                </Button>
              </Link>

              <Button
                onClick={async () => {
                  await mutateAsync();

                  queryClient.invalidateQueries("validateToken");
                }}
                className="flex items-center text-blue-600 px-3 bg-white font-bold hover:bg-gray-100"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/sign-in">
              <Button className="flex items-center text-blue-600 px-3 bg-white font-bold hover:bg-gray-100">
                Sign in
              </Button>
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
