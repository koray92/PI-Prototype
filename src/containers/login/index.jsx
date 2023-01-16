import PropTypes from "prop-types";
import clsx from "clsx";
import LoginForm from "@components/login-form";
import SocialAuth from "@components/social-auth";

const LoginArea = ({ className, space }) => (
    <div
        className={clsx(
            "login-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">

            <div className="mx-auto offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                <LoginForm />
            </div>
        </div>
    </div>
);

LoginArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

LoginArea.defaultProps = {
    space: 1,
};
export default LoginArea;
