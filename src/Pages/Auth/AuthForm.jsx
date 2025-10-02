import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  return (
    <>
      <div>
        {type === "signin" ? "Sign In " : "Sign Up"}
        {type === "signin" && (
          <div>
            jitesh sign{" "}
            <Link to="/signup" className="bg-red-500">
              {type}
            </Link>
          </div>
        )}

        <Link to="/signin" className="bg-cyan-500">
          {type}
        </Link>
      </div>
    </>
  );
};

export default AuthForm;
