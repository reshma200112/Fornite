import PropTypes from "prop-types";
import styles from "./ButtonWide.module.css";
const ButtonBlack = ({ text,color }) => {
  const buttonClassName = color === 'white' ? styles.buttonWhite : styles.buttonBlack;

  return (
    <button type="button" className={`${styles.buttonWide} ${buttonClassName}`}>
      {text}
    </button>
  );
};

ButtonBlack.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonBlack;
