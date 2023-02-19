import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Web3 from "web3";

const SignupForm = ({ className }) => {
    const [walletAddress, setWalletAddress] = useState("");
    const textInput = useRef(null);
    const router = useRouter();
    const {
        register,
        setFocus,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        mode: "onChange",
    });
    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            router.push('/home');
        }
    }, [router, session]);
    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log("typeof data");
        data.walletaddress = walletAddress;
        console.log(typeof data);
        await axios
            .post("/api/auth/signup", data)
            .then((response) => {
                router.push("/login");
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const walletConnect = () => {
        if(window.ethereum){
              window.ethereum.request({method:'eth_requestAccounts'})
              .then(res=>{
                  // Return the address of the wallet
                  setWalletAddress(Web3.utils.toChecksumAddress(window?.ethereum?.selectedAddress));

                  //setFocus("walletaddress");
              })
        }else{
            alert("install metamask extension!!")
        }
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="user_name"
                        {...register("user_name")}
                    />
                    {errors.user_name && (
                        <ErrorText>{errors.user_name?.message}</ErrorText>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="walletadress" id="walletaddress" className="form-label">
                        Verify wallet address:
                    </label>
                    <input
                        type="text"
                        id="wallet_id"
                        value={walletAddress}
                        {...register('wallet_id')}
                    />
                    {errors.wallet_id && (
                        <ErrorText>{errors.wallet_id?.message}</ErrorText>
                    )}
                </div>
                <div className="icon-box text-center mb-4">
                    <Button
                        color="primary-alta"
                        className="connectBtn"
                        size="large"
                        onClick={() => walletConnect()}
                    >
                        Wallet connect
                    </Button>
                </div>
                <div className="mb-5">
                    <label htmlFor="usermail" className="form-label">
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
                        Create Password
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
                <div className="mb-5">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Re Password
                    </label>
                    <input
                        type="password"
                        id="exampleInputPassword1"
                        {...register("exampleInputPassword1", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues("user_password") ||
                                "The passwords do not match",
                        })}
                    />
                        {errors.exampleInputPassword&& (
                        <ErrorText>
                            {errors.exampleInputPassword1?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1", {
                            required: "Checkbox is required",
                        })}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Allow to all tearms & Allow to all tearms & condition
                    </label>
                    <br />
                    {errors.exampleCheck1 && (
                        <ErrorText>{errors.exampleCheck1?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Sign Up
                </Button>
                <Button path="/login" color="primary-alta" size="medium">
                    Log In
                </Button>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
};
export default SignupForm;
