import PropTypes from "prop-types";
import TopSeller from "@components/top-seller/layout-02";
import { IDType, ImageType } from "@utils/types";

const BidsTabContent = ({ bids }) => {
  const convertTime = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let year = date.getFullYear();
    // Minutes part from the timestamp
    let month = date.getMonth();
    // Seconds part from the timestamp
    let day = date.getDate();
    let hour=date.getHours();
    let second=date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = `${year  }-${  month}${1  }-${  day} ${  hour}:${  second}`;
    return formattedTime;
  };
  return (
    <div>

      {bids?.map((bid) => (

        <TopSeller
          owner={bid.wallet_id}
          receiver={bid.receiver}
          eth={bid.price}
          time={bid.bid_date}
          image={{
            src: "https://i.ibb.co/bdpcL6B/user-account-management-logo-user-icon-11562867145a56rus2zwu.png",
            width: 44,
            height: 44
          }}
        />

      ))}
    </div>
  );
}

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
