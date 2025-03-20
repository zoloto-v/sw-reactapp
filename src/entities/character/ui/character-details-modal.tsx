import { Modal } from "../../../shared/ui/modal";
import { Card } from "../../../shared/ui/card";
import { Indicator } from "../../../shared/ui/indicator";
import { Tag } from "../../../shared/ui/tag";
import styles from "./character-details-modal.module.css";
import starwarsImg from "../../../assets/starwars.svg";
import { GENDER_COLOR_LABEL } from "../../../shared/types";

export const CharacterDetailsModal: React.FC<{onClose: () => void}> = ({onClose}) => {
  return (
    <Modal onClose={onClose}> 
      <div className={styles.detail}>
        <div className={styles["detail__wrapper-img"]}>
          <div className={styles.detail__img}
            style={{background: `url(${starwarsImg}) center center no-repeat`, backgroundSize: "contain"}} 
          >
            <div className={styles.detail__tags}>
              {true && (
                <Tag color={GENDER_COLOR_LABEL["male"]} text={"male"} />
              )}
              {true && (
                <Tag color="blue" text={"41.9BBY"} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.detail__content}>
          <div className={styles.detail__top}>
            <h2 className="grey">
              Jabba Desilijic Tiure
            </h2>
            <Card>
              <div className={styles.detail__description}>
                <span>hair color: brown: brown</span>
                <span>skin color - white</span>
                <span>hair color: brown</span>
              </div>
            </Card>
          </div>
          <div className={styles.detail__indicators}>
            <Card>
              <Indicator index={75} name="height" />
            </Card>
            <Card>
              <Indicator index={105} name="weight" />
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};