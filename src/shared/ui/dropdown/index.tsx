import { SyntheticEvent, useEffect, useState } from "react";
import styles from "./dropdown.module.css";
import { IDropdown } from "../../types";

export const Dropdown: React.FC<IDropdown> = ({items = []}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  useEffect(() => {
    setSelected(items[0]?.value ?? '');
  }, []);

  const text = items.find(i => i.value === selected)?.text ?? '';

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

    setSelected(value);
    setVisible(false);
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