import { ICharacter, GENDER_COLOR_LABEL } from "../../shared/types";
import { Indicator } from "../../shared/ui/indicator";
import { Tag } from "../../shared/ui/tag";
import styles from "./character-preview.module.css";

export const CharacterPreview: React.FC<ICharacter> = ({name = '', height = 0, mass = 0, gender, birth_year = null}) => {
  return (
    <div className={styles["character-preview"]}>
      <h3 className={styles["character-preview__title"]}>{name}</h3>
      <div className={styles["character-preview__indexes"]}>
        <Indicator index={+height} name="height" />
        <Indicator index={+mass} name="mass" />
      </div>
      <div className={styles["character-preview__tags"]}>
        {gender !== "n/a" && (
          <Tag color={GENDER_COLOR_LABEL[gender]} text={gender} />
        )}
        {birth_year && (
          <Tag color="blue" text={birth_year} />
        )}
      </div>
    </div>
  );
};