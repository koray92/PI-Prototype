import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ForgetPasswordArea from "@containers/forget-password";
import axios from "axios";
import clsx from "clsx";
import Logo from "@components/logo";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ErrorText from "@ui/error-text";
import React, { useEffect, useRef, useState, useContext} from "react";
const Forget = (params) => {
    const { product } = params;
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { pid } = router.query;
    const {
        register,
        setFocus,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(router.query.slug[0]);
        await axios
            .post(
                `/api/auth/resetpassword/${router.query.slug[0]}/${router.query.slug[1]}`,
                data
            )
            .then((response) => {
                router.push("/login");
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };
    return (
        <Wrapper>
            <SEO pageTitle="Forget Page" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Activation Mail?"
                    currentPage="Activation Mail?"
                />
                <div
                    className={clsx(
                        "forget-password-area",
                        "rn-section-gapTop"
                    )}
                >
                    <div className="container">
                        <div className="row justify-content-center g-5">
                            <div className="col-xl-4 col-lg-6 col-10">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-wrapper-one">
                                        <Logo
                                            logo={[
                                                {
                                                    src: "/weapons/logo/logo-white2.png",
                                                },
                                                {
                                                    src: "/weapons/logo/logo-dark2.png",
                                                },
                                            ]}
                                            className="mb--50"
                                        />
                                        <div className="mb-5">
                                            <label
                                                htmlFor="password"
                                                className="form-label"
                                            >
                                                Create Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                {...register("password", {
                                                    required:
                                                        "Password is required",
                                                })}
                                            />

                                            {errors.password && (
                                                <ErrorText>
                                                    {errors.password?.message}
                                                </ErrorText>
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
                                                {...register(
                                                    "exampleInputPassword1",
                                                    {
                                                        required:
                                                            "Confirm Password is required",
                                                        validate: (value) =>
                                                            value ===
                                                                getValues(
                                                                    "password"
                                                                ) ||
                                                            "The passwords do not match",
                                                    }
                                                )}
                                            />
                                            {errors.exampleInputPassword1 && (
                                                <ErrorText>
                                                    {
                                                        errors
                                                            .exampleInputPassword1
                                                            ?.message
                                                    }
                                                </ErrorText>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <Button type="submit">Send</Button>
                                        </div>

                                        <span className="mt--20 notice">
                                            Note: We will send a password to
                                            your email
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Wrapper>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;

    return {
        props: {
            params,
            className: "template-color-1",
        },
    };
    // Rest of `getServerSideProps` code
}

export default Forget;
