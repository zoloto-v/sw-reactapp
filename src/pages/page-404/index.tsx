import { NotFound } from "../../widgets/not-found";
import { BUTTON_BG } from "../../shared/types/ui-types";
import { Link } from "../../shared/ui/link";
import styles from "./page-404.module.css";
import { useTranslation } from "react-i18next";

export const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <NotFound />
      <Link
        to="/"
        bg={BUTTON_BG["green"]}
        styles={{
          position: "relative",
          zIndex: 100,
        }}
      >
        {t("links.Return")}
      </Link>
    </div>
  );
};
