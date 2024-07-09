import styles from "./Home.module.css";
import bannerImage from "../assets/home/banner.png";
import Card from "./Card";
import image1 from "../assets/home/cardImage1.png"; // Update with actual image paths
import image2 from "../assets/home/cardImage2.png";
import image3 from "../assets/home/cardImage3.png";
import StatCard from "./StatCard";
import ButtonWide from "./ButtonWide";
const Home = () => {
  const buttonText = [
    {
      visitSite: "Visit Website",
      skype: "Ring us on Skype",
      contactUs: "Contact Us",
    },
  ];
  const cards = [
    {
      imageSrc: image1,
      description:
        "Explore Large, Destructible Environments Where No Two Games Are Ever The Same.",
    },
    {
      imageSrc: image2,
      description:
        "Team Up With Friends By Sprinting, Climbing And Smashing Your Way To Earn Your Victory Royale.",
    },
    {
      imageSrc: image3,
      description:
        "Discover Even More Ways To Play Across Thousands Of Creator-Made Game Genres.",
    },
  ];
  const stats = [
    {
      value: "5M",
      description: "Daily User Engagements",
    },
    {
      value: "$500K",
      description: "Revenue Surge for an Platform",
    },
    {
      value: "10X",
      description: "ROAS on all our marketing campaigns",
    },
  ];
  return (
    <div className={styles.homeContainer}>
      <div className={styles.closeButton}>
        <button className={styles.closeButtonIcon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.79175 1.79175L29.2084 29.2084"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.79175 29.2084L29.2084 1.79175"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.bannerContainer}>
            <h1 className={styles.bannerTitle}>
              Epic Games : An American video game and software developer and
              publisher based in Cary, North Carolina.
            </h1>
            <div className={styles.bannerImageContainer}>
              <img
                src={bannerImage}
                className={styles.bannerImage}
                alt="Fortnite"
              />
            </div>
            <p className={styles.bannerDescription}>
              Create, play, and battle with friends for free in Fortnite. Be the
              last player standing in Battle Royale and Zero Build, experience a
              concert or live event, or discover over a million creator made
              games, including racing, parkour, zombie survival, and more. Each
              Fortnite island has an individual age rating so you can find the
              one that&apos;s right for you and your friends. Find it all in
              Fortnite ... Drop In.
            </p>
            <ButtonWide text={buttonText[0].visitSite} color={"white"} />
          </div>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <Card
                key={index}
                imageSrc={card.imageSrc}
                description={card.description}
              />
            ))}
          </div>
          <div className={styles.contributionContainer}>
            <div className={styles.contributionContents}>
              <h1 className={styles.contributionTitle}>Our Contribution</h1>
              <p className={styles.contributionDes}>
                Our core offering extends beyond mere profit generation; we
                emphasize the growth and active involvement of our user
                community. Collaborating with us represents an investment,
                rather than a mere expenditure. Our dedication to providing
                distinctive digital interactions guarantees unparalleled
                benefits for our clientele.
              </p>
            </div>
            <div className={styles.statContainer}>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
          <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>
              Interested in delving deeper into the project?
            </h1>
            <p className={styles.contactDes}>
              If you&apos;d like to explore further details about our
              initiatives or any of our affiliated brands, don&apos;t hesitate
              to connect. You can reach out to us via email at{" "}
              <b>hello@abc.com</b> or give us a call at <b>+91 480 20802730.</b>
            </p>
            <div className={styles.contactButtonWrapper}>
              <ButtonWide text={buttonText[0].skype} color={"black"} />
              <ButtonWide text={buttonText[0].contactUs} color={"white"} />
            </div>
          </div>
          <div className={styles.footerContainer}>
            <p className={styles.footerText}>
              © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
