import { Layout } from "../../shared/ui/layouts";
import { Section } from "../../shared/ui/section";
import { Dropdown } from "../../shared/ui/dropdown";
import { CharacterPreview } from "../../widgets/character-preview";
import styles from "../characters/characters.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/lib";
import { selectCharacterList } from "../../app/model";
import { getCharacterList } from "../../entities/character/model/character-list-slice";

export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(selectCharacterList);

  useEffect(() => {
    console.log('mounted');

    dispatch(getCharacterList())
      .unwrap()
      .catch((err: any) => {
        console.error(err);
      })

    return () => {
      console.log('unmounted');
    }
  }, []);

  const onChange = (value: any) => alert(value);

  const intlMenu = [
    {
      text: 'english',
      value: 'en',
    },
    {
      text: 'wookiee',
      value: 'wookiee',
    },
  ];

  const filter = [
    {
      text: 'all',
      value: ''
    },
    {
      text: 'brown',
      value: 'brown'
    },
    {
      text: 'red',
      value: 'red'
    },
    {
      text: 'blue',
      value: 'blue'
    },
    {
      text: 'white',
      value: 'white'
    }
  ];

  return (
    <Layout>
      <Section>
        <div className={styles.intl}>
          <span className="mr-12">language</span>
          <Dropdown
            onChange={onChange}
            items={intlMenu}
          />
        </div>

        <h2>60 Peoples for you to choose your favorite</h2>

        <div className={styles.filter}>
          <span className="mr-12">color eye</span>
          <Dropdown 
            onChange={onChange}
            items={filter}
          />
        </div>
        <div className={styles.characters}>
          {data.map((item) => {
            return (
              <CharacterPreview {...item} />
            );
          })}
        </div>
      </Section>
    </Layout>
  );
};