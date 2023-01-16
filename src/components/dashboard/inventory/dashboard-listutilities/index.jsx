import clsx from "clsx";

const topside = () => (
    <div className=" mt-5">
        <div className="container">
            <h1
                className=""
                style={{
                    marginLeft: "6%",
                    marginTop: "50px",
                    marginBottom: "40px",
                }}
            >
                Utilities:
            </h1>
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className=" border border-5 rounded-pill mt-5 bg-color--2 weapon-card">
                        <img
                            className="inventory-utilities-image"
                            src="/images/utilities/nft-utilities-3.png"
                        />

                        <div>
                            <h3 className="mt-0 text-center">Level 5 Helmet</h3>
                            <h3 className="mt-0 text-center color-purple">
                                Epic
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className=" border border-5 rounded-pill mt-5 bg-color--2 weapon-card">
                        <div className="me-4">
                            <img
                                className="inventory-utilities-image"
                                src="/images/utilities/nft-utilities-4.png"
                            />
                        </div>
                        <div>
                            <h3 className="mt-0 text-center">Level 2 Helmet</h3>
                            <h3 className="mt-0 text-center color-green">
                                Uncommon
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                    <div className=" border border-5 rounded-pill mt-5 bg-color--2 weapon-card">
                        <div className="me-4">
                            <img
                                className="inventory-utilities-image"
                                src="/images/utilities/nft-utilities-5.png"
                            />
                        </div>
                        <div>
                            <h3 className="mt-0 text-center">Level 3 Bag</h3>
                            <h3 className="mt-0 text-center color-green">
                                Uncommon
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex border border-5 p-5 rounded-pill mt-5 bg-color--2">
                <div className="me-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="dashboard-top-icon color-green"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div
                    style={{ alignItems: "center", marginTop: "17px" }}
                    className="d-flex"
                >
                    <h3 className="mt-0 text-center dashboard-top-element-bot-text d-inline-block">
                        Total Value of Utilities:
                    </h3>
                    <h3 className="mt-0 me-2 ms-5 text-right dashboard-top-element-bot-text color-green ">
                        3 Eth
                    </h3>
                </div>
            </div>
        </div>
    </div>
);

export default topside;
