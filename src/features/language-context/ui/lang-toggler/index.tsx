import styles from "./button.module.css";
import btnImg from "../../../../shared/assets/images/btn-icon.svg";
import { useLanguageContext } from "../../provider";

export const LangToggler = () => {
  let onClickLanguageChange;
  const value = useLanguageContext();

  if (value && "onClickLanguageChange" in value) {
    onClickLanguageChange = value["onClickLanguageChange"];
  }

  return (
    <button className={styles["lang-toggler"]} onClick={onClickLanguageChange}>
      <img src={btnImg} alt="lang-toggler" height={"60px"} width={"60px"} />
    </button>
  );
};
