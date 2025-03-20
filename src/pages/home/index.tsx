import { CustomLayout } from "../../shared/ui/layouts";
import { Banner } from "../../widgets/greetings";
import { Section } from "../../shared/ui/section";
import bg from "../../shared/assets/images/yoda.svg";
import styles from "./home.module.css";
import { BUTTON_BG } from "../../shared/types/ui-types";
import { Link } from "../../shared/ui/link";

export const HomePage = () => {
  return (
    <CustomLayout>
      <div className={styles.page}>
        <div className={styles.page__inner}
          style={{backgroundImage: `url(${bg})`}}
        >
          <Section>
            <div className={styles['left-block']}>
              <Banner
                title="Find all your favorite character"
                text="You can find out all the information about your favorite characters"
              />
              <div className="mt-36" />
              <Link to="/characters"
                bg={BUTTON_BG["green"]}
              >
                See more
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </CustomLayout>
  );
};