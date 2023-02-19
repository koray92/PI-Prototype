import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import React, { useEffect } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from 'next/link';
const LoginForm = ({ className }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const { data: session } = useSession();
    const { redirect } = router.query;
    useEffect(() => {
        if (session?.user) {
            router.push("/home");
        }
    }, [router, session]);
    const submitHandler = async ({ user_mail, user_password }) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                user_mail,
                user_password,
            });
            if (result.error) {
                toast.error(result.error);
            } else if (result.ok) {
                toast.success("Succesful Login .");
            }
        } catch (err) {
            toast.error(err);
        }
    };
    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="user_mail"
                        {...register("user_mail", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.user_mail && (
                        <ErrorText>{errors.user_mail?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="user_password"
                        {...register("user_password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.user_password && (
                        <ErrorText>{errors.user_password?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1")}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Remember me later
                    </label>
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Log In
                </Button>
                <Button path="/sign-up" color="primary-alta" size="medium">
                    Sign Up
                </Button>
                <Link href={`/forget`}>
                    <p style={{cursor: "pointer"}} className="mt-3 color-white">Forgot password</p>
                </Link>

            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
