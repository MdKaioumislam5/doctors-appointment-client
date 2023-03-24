import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result?.user;
        console.log(user);
        const userInfo = {
          displayedName: data?.name,
        };
        updateUser(userInfo);
        toast("User Created successfully");
      })
      .catch((error) => {
        setSignUpError(error?.message);
      });
    //   // Signed in
    //   const user = result.user;
    //   console.log(user);
    //   const userInfo = {
    //     displayedName: data.name,
    //   };
    //   updateUser(userInfo)
    //     .then(() => {
    //       toast("User created successfully");
    //     })
    //     .catch((error) => {});
    //   // ...
    // })
    // .catch((error) => {
    //   setSignUpError(error.message);
    //   // setError(errorMessage);
    //   // ..
    // });
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-96">
        <h1 className="text-center text-4xl">SignUp</h1>
        <form className="w-96" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name here"
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>
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
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/,
                  message:
                    "Password should be at least 6 digits % lowercase, uppercase & special characters",
                },
              })}
            />
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
            {/* <div> */}
            {signUpError && <p className="text-red-600">{signUpError}</p>}
            {/* </div> */}
          </div>
          <input
            type="submit"
            value="SignUp"
            className="btn btn-accent w-full my-4"
          />
          <p>
            Already Registered{" "}
            <Link className="text-primary font-bold" to="/login">
              Please Login
            </Link>{" "}
          </p>
        </form>
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

export default SignUp;
