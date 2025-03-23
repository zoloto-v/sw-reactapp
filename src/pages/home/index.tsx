import { CustomLayout } from "../../shared/ui/layouts";
import { Banner } from "../../widgets/greetings";
import { Section } from "../../shared/ui/section";
import bg from "../../shared/assets/images/yoda.svg";
import styles from "./home.module.css";
import { BUTTON_BG } from "../../shared/types/ui-types";
import { Link } from "../../shared/ui/link";
import { useMediaQuery } from "react-responsive";
import { useLanguageContext } from "../../features/language-context/provider";

export const HomePage = () => {
  const isMobileVisible = useMediaQuery({ query: "(max-width: 1000px)" });
  const { t } = useLanguageContext();
  return (
    <CustomLayout>
      <div className={styles.page}>
        <div
          className={styles.page__inner}
          style={
            isMobileVisible
              ? {
                  background: `linear-gradient(#1f2a63b3, #16002eb3), url(${bg}) center no-repeat`,
                }
              : { backgroundImage: `url(${bg})` }
          }
        >
          <Section>
            <div className={styles["left-block"]}>
              <Banner
                title={t("homePage.title")}
                text={t("homePage.subTitle")}
              />
              <div className="mt-36" />
              <Link to="/characters" bg={BUTTON_BG["yellow"]}>
                {t("links.moreBtn")}
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </CustomLayout>
  );
};
