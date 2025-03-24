import { SyntheticEvent, useState, useMemo } from "react";
import styles from "./dropdown.module.css";
import { IDropdown } from "../../types";

export const Dropdown: React.FC<IDropdown> = ({onChange, selected = "", items = []}) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const text = useMemo(() => {
    return items.find(i => i.value === selected)?.text ?? '';
  }, [items, selected]);

  const setItem = (event: SyntheticEvent<EventTarget>) => {
    let value = '';
    const {target} = event;

    if (target instanceof HTMLLIElement) {
      value = target.dataset?.value ?? '';
    } else {
      const liElement = (target as HTMLElement).closest(`li.${styles.list__item}`);

      if (liElement instanceof HTMLLIElement) {
        value = liElement.dataset?.value ?? '';
      }
    }

    setVisible(false);
    onChange(value);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.dropdown__button} 
          onClick={() => setVisible(!isVisible)}
        >
          {text}
        </button>
        <ul className={isVisible ? `${styles.list} ${styles.list_visible}` : styles.list}>
          {items.map(item => (
            <li key={item.text}
              data-value={item.value}
              className={(selected === item.value) ? `${styles.list__item} ${styles.list__item_active}` : styles.list__item}
              onClick={setItem}
            >
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};