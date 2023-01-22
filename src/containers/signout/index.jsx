import PropTypes from "prop-types";
import clsx from "clsx";
import Logo from "@components/logo";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const ForgetPasswordArea = ({ className, space }) => {
    const [email, setEmail] = useState("");

    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {
        if (session?.user) {
            signOut();
            router.push('/product');
        }
        router.push('/product');
    }, [router, session]);

    return (
        <div
            className={clsx(
                "forget-password-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row justify-content-center g-5">


                </div>
            </div>
        </div>
    );
};

ForgetPasswordArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

ForgetPasswordArea.defaultProps = {
    space: 1,
};
export default ForgetPasswordArea;
