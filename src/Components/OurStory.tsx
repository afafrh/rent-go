import { useTranslation } from "react-i18next";
import "./OurStory.css";
import storyImage from "../assets/ourStorybike.png";

const OurStory = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <section className="our-story">
      <div className="story-text">
        <h2 className="story-title">{t("our_story_title")}</h2>
        <p>{t("our_story_paragraph_1")}</p>
        <p>{t("our_story_paragraph_2")}</p>
        <p>{t("our_story_paragraph_3")}</p>
      </div>
      <div className="story-image">
        <img src={storyImage} alt="Our story" />
      </div>
    </section>
  );
};

export default OurStory;
