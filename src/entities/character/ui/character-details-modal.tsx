import { Modal } from "../../../shared/ui/modal";
import { Card } from "../../../shared/ui/card";
import { Indicator } from "../../../shared/ui/indicator";
import { Tag } from "../../../shared/ui/tag";
import styles from "./character-details-modal.module.css";
import starwarsImg from "../../../shared/assets/images/starwars.svg";
import { GENDER_COLOR_LABEL } from "../../../shared/types";
import { useAppSelector } from "../../../app/lib";
import { selectCharacterDetails } from "../../../app/model";

export const CharacterDetailsModal: React.FC<{onClose: () => void}> = ({onClose}) => {
  const {data} = useAppSelector(selectCharacterDetails);

  return (
    <Modal onClose={onClose}> 
      <div className={styles.detail}>
        <div className={styles["detail__wrapper-img"]}>
          <div className={styles.detail__img}
            style={{background: `url(${starwarsImg}) center center no-repeat`, backgroundSize: "contain"}} 
          >
            <div className={styles.detail__tags}>
              {data?.gender && data?.gender && data?.gender !== "n/a" && (
                <Tag color={GENDER_COLOR_LABEL["male"]} text={"male"} />
              )}
              {data?.birth_year && data?.birth_year !== "unknown" && (
                <Tag color="blue" text={"41.9BBY"} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.detail__content}>
          <div className={styles.detail__top}>
            <h2 className="grey">
              {data?.name}
            </h2>
            <Card>
              <div className={styles.detail__description}>
                <span>{`hair color: ${data?.hair_color}`}</span>
                <span>{`skin color: ${data?.skin_color}`}</span>
              </div>
            </Card>
          </div>
          <div className={styles.detail__indicators}>
            <Card>
              {isFinite(Number(data?.height)) && <Indicator index={Number(data?.height)} name="height" />}
            </Card>
            <Card>
              {isFinite(Number(data?.mass)) && <Indicator index={Number(data?.mass)} name="mass" />}
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};