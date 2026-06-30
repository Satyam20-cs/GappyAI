import { ArrowRight } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";

import { useForm } from "react-hook-form";

import type { LoginData } from "../types/auth";

import { loginUser } from "../services/auth";

import { useState } from "react";

import { useAuth } from "../context/authcontext";

import { useNavigate, Link } from "react-router-dom";

import toast from "react-hot-toast";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm<LoginData>();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(data: LoginData) {

        try {

            setLoading(true);

            setError("");

            const response = await loginUser(data);

            login(
                response.token,
                response.user
            );

            toast.success("Welcome back!");

            navigate("/dashboard");
            localStorage.setItem(
                "user",
                JSON.stringify(response.user)
            );

            toast.success("Welcome back!");

            navigate("/dashboard");

        }

        catch (err: any) {
            toast.error(
                err.response?.data?.message ||
                "Login Failed"
            );

            setError(

                err.response?.data?.message ||

                "Login Failed"

            );


        }

        finally {

            setLoading(false);

        }

    }

    return (

        <AuthLayout>

            <div className="grid w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/30 bg-white/50 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

                <div className="hidden bg-neutral-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

                    <div>

                        <h1 className="text-4xl font-bold">

                            GappyAI

                        </h1>

                        <p className="mt-6 leading-8 text-neutral-300">

                            Your AI powered command centre.

                        </p>

                    </div>

                </div>

                <div className="bg-white/70 p-10">

                    <p className="mb-2 text-sm text-neutral-500">

                        Welcome Back!

                    </p>

                    <h2 className="mb-8 text-4xl font-bold">

                        Login

                    </h2>

                    <form

                        onSubmit={handleSubmit(onSubmit)}

                        className="space-y-5"

                    >

                        <div>

                            <input

                                type="email"

                                placeholder="Email"

                                {

                                ...register(

                                    "email",

                                    {

                                        required: "Email is required"

                                    }

                                )

                                }

                                className="w-full rounded-2xl border border-neutral-300 p-4"

                            />

                            {

                                errors.email &&

                                <p className="mt-1 text-sm text-red-500">

                                    {errors.email.message}

                                </p>

                            }

                        </div>

                        <div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    {...register("password", { required: "Password required" })}
                                    className="w-full rounded-2xl border border-neutral-300 p-4 pr-12"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-800"
                                >
                                    {showPassword ? "🔓" : "🔒"}
                                </button>
                            </div>

                            {

                                errors.password &&

                                <p className="mt-1 text-sm text-red-500">

                                    {errors.password.message}

                                </p>

                            }

                        </div>

                        {

                            error &&

                            <p className="text-red-500">

                                {error}

                            </p>

                        }

                        <button

                            disabled={loading}

                            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 p-4 text-white"

                        >

                            {

                                loading ?

                                    "Logging In..."

                                    :

                                    <>

                                        Login

                                        <ArrowRight size={18} />

                                    </>

                            }

                        </button>

                    </form>

                    <p className="mt-8 text-center">

                        Don't have an account?

                        <Link

                            to="/signup"

                            className="ml-2 font-semibold"

                        >

                            Sign Up

                        </Link>

                    </p>

                </div>

            </div>

        </AuthLayout>

    )

}
export default Login;