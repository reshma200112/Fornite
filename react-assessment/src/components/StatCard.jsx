import PropTypes from "prop-types";
import statSyles from "./StatCard.module.css";

const StatCard = ({ value, description }) => {
  return (
    <div className={statSyles.statCard}>
      <h1 className={statSyles.value}>{value}</h1>
      <p className={statSyles.description}>{description}</p>
    </div>
  );
};

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatCard;
