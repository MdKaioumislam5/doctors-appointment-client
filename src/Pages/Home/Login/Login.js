import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  let navigate = useNavigate();
  const location = useLocation()

  let from = location?.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      setLoginError(error.message);
    })
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-96">
        <h1 className="text-center text-4xl">Login</h1>
        <form className="w-96" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
            <input
              type="email"
              placeholder="Email here"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is required" })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}

            <input
              type="password"
              placeholder="Password here"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be six characters",
                },
              })}
            />
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full my-4"
          />
          <p>
            New to Doctors Appointment{" "}
            <Link className="text-primary font-bold" to="/signUp">
              Create New Account
            </Link>{" "}
          </p>
        </form>
      <div>
        {
          loginError && <p className="text-red-600">{loginError}</p>
        }
      </div>
        <div className="flex flex-col border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button className="btn btn-active btn-ghost w-full">
          GoogleSignIn
        </button>
      </div>
    </div>
  );
};

export default Login;
