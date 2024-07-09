
import PropTypes from 'prop-types';
import cardStyles from './Card.module.css'
const Card = ({ imageSrc, description }) => {
  return (
    <div className={cardStyles.cardItem}>
      <img src={imageSrc} alt="Card image" className={cardStyles.cardImage}/>
      <p  className={cardStyles.cardDes}>{description}</p>
    </div>
  );
};
Card.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
export default Card;
