import { ICharacter, GENDER_COLOR_LABEL } from "../../shared/types";
import { Indicator } from "../../shared/ui/indicator";
import { Tag } from "../../shared/ui/tag";
import styles from "./character-preview.module.css";

export const CharacterPreview: React.FC<ICharacter & {onClick: () => void}> = ({
  name = '',
  height = 0,
  mass = 0,
  gender,
  birth_year = null,
  onClick
}) => {
  return (
    <div className={styles["character-preview"]}
      onClick={onClick}
    >
      <h3 className={styles["character-preview__title"]}>{name}</h3>
      <div className={styles["character-preview__indexes"]}>
        {isFinite(+height) && <Indicator index={+height} name="height" />}
        {isFinite(+mass) && <Indicator index={+mass} name="mass" />}
      </div>
      <div className={styles["character-preview__tags"]}>
        {gender && gender !== "n/a" && (
          <Tag color={GENDER_COLOR_LABEL[gender]} text={gender} />
        )}
        {birth_year && birth_year !== "unknown" && (
          <Tag color="blue" text={birth_year} />
        )}
      </div>
    </div>
  );
};