import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-02";
import { IDType, ImageType } from "@utils/types";

const BidsTabContent = ({ bids }) => (
    <div>

        {bids?.map((bid) => (

            <TopSeller
                owner={bid.owner}
                eth={bid.price/1000000000000000}
                time={bid.endTime}
                image={{ src: "https://i.ibb.co/bdpcL6B/user-account-management-logo-user-icon-11562867145a56rus2zwu.png", width: 44, height: 44 }}
            />

        ))}
    </div>
);

BidsTabContent.propTypes = {
    bids: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType.isRequired,
            user: PropTypes.shape({
                name: PropTypes.string.isRequired,
                slug: PropTypes.string.isRequired,
                image: ImageType.isRequired,
            }),
            amount: PropTypes.string.isRequired,
            bidAt: PropTypes.string.isRequired,
        })
    ),
};

export default BidsTabContent;
