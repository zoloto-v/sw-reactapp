import { ICharacter, GENDER_COLOR_LABEL } from "../../shared/types";
import { Indicator } from "../../shared/ui/indicator";
import { Tag } from "../../shared/ui/tag";
import styles from "./character-preview.module.css";
import Skeleton from "react-loading-skeleton";

export const CharacterPreview: React.FC<
  Partial<ICharacter> & { onClick: () => void; isPending: boolean }
> = ({
  name = "",
  height = 0,
  mass = 0,
  gender,
  birth_year = null,
  onClick,
  isPending,
}) => {
  return (
    <div className={styles["character-preview"]} onClick={onClick}>
      <h3 className={styles["character-preview__title"]}>
        {isPending ? <Skeleton /> : name}
      </h3>
      <div className={styles["character-preview__indexes"]}>
        {isPending ? (
          <>
            <Skeleton height="95px" width="90px" />
            <Skeleton height="95px" width="90px" />
          </>
        ) : (
          <>
            {isFinite(+height) && <Indicator index={+height} name="height" />}
            {isFinite(+mass) && <Indicator index={+mass} name="mass" />}
          </>
        )}
      </div>
      <div className={styles["character-preview__tags"]}>
        {isPending ? (
          <>
            <Skeleton height="22px" width="51px" />
            <Skeleton height="22px" width="51px" />
          </>
        ) : (
          <>
            {gender && gender !== "n/a" && (
              <Tag color={GENDER_COLOR_LABEL[gender]} text={gender} />
            )}
            {birth_year && birth_year !== "unknown" && (
              <Tag color="blue" text={birth_year} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
