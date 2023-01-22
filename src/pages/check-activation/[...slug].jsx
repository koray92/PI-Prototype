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
import React, { useEffect, useRef, useState, useContext } from "react";

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

    useEffect(() => {
        const onCheck = async () => {
            console.log(router.query.slug[0]);
            await axios
                .get(
                    `/api/auth/activatelink/${router.query.slug[0]}/${router.query.slug[1]}`,
                )
                .then((response) => {
                    console.log(response.data.message);
                    router.push("/login");
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
        };

        const result = onCheck()
            // make sure to catch any error
            .catch(console.error);
    });

    return (
        <Wrapper>
            <SEO pageTitle="Forget Page" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Forget Password?"
                    currentPage="Forget Password?"
                />
                <div
                    className={clsx(
                        "forget-password-area",
                        "rn-section-gapTop"
                    )}
                />
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
