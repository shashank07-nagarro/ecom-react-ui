import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Button, Input } from "../components";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const loginSubmit = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
      <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
        <div className="">
          <p className="text-4xl font-bold">LOGIN</p>
          <p>Welcome back, customer!</p>
        </div>

        <form
          onSubmit={handleSubmit(loginSubmit)}
          className="mt-6 flex flex-col"
        >
          <Input
            label="Email Address"
            className="mb-3 mt-3 border px-4 py-2"
            type="email"
            placeholder="youremail@domain.com"
            {...register("email", {
              required: true,
            })}
          />

          <Input
            label="Password"
            className="mt-3 border px-4 py-2"
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="my-5 w-full bg-violet-900 py-2 text-white"
          >
            LOGIN
          </Button>
        </form>

        <div className="mt-4 flex justify-between">
          <form className="flex gap-2">
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </form>
          <Link to="#" className="text-violet-900">
            Forgot password
          </Link>
        </div>

        <p className="text-center text-gray-500">OR LOGIN WITH</p>

        <div className="my-5 flex gap-2">
          <button className="w-1/2 bg-blue-800 py-2 text-white">
            FACEBOOK
          </button>
          <button className="w-1/2 bg-orange-500 py-2 text-white">
            GOOGLE
          </button>
        </div>

        <p className="text-center">
          Don`t have account?
          <Link to="/signup" className="text-violet-900">
            Register now
          </Link>
        </p>
      </div>
    </section>
  );
}
