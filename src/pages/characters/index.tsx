import { Layout } from "../../shared/ui/layouts";
import { Section } from "../../shared/ui/section";
import { Dropdown } from "../../shared/ui/dropdown";
import { CharacterPreview } from "../../widgets/character-preview";
import styles from "../characters/characters.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/lib";
import { selectCharacterList } from "../../app/model";
import { getCharacterList } from "../../entities/character/model/character-list-slice";
import { Loader } from "../../shared/ui/loader";
import { Pagination } from "../../features/pagination";
import { ReactPaginateProps } from "react-paginate";

export const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const {data, count, isPending, isError} = useAppSelector(selectCharacterList);

  useEffect(() => {
    dispatch(getCharacterList())
      .unwrap()
      .catch((err: any) => {
        console.error(err);
      })

    return () => {
      console.log('unmounted');
    }
  }, []);

  const pagesCount = Math.ceil(Number(count) / 10);
  const onChange = (value: any) => alert(value);
  const onPageChange: ReactPaginateProps['onPageChange'] = ({selected}) => dispatch(getCharacterList(selected + 1));

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
      <div className={styles.intl}>
        <span className="mr-12">language</span>
        <Dropdown
          onChange={onChange}
          items={intlMenu}
        />
      </div>

      <h2 style={{visibility: count ? 'visible' : 'hidden'}}>{count ? count : 'Many'} peoples for you to choose your favorite</h2>

      <div className={styles.filter}>
        <span className="mr-12">color eye</span>
        <Dropdown 
          onChange={onChange}
          items={filter}
        />
      </div>
      <>
        {isError && (
          <div className={styles.characters__statuses}>
            something went wrong
          </div>
        )}
        {isPending && (
          <div className={styles.characters__statuses}>
            <Loader />
          </div>
        )}
        {!isPending && !isError && data && (
          <>
            <div className={styles.characters}>
              {data.map(item => <CharacterPreview {...item} />)}
            </div>
          </>
        )}
        <Pagination count={pagesCount}
          onPageChange={onPageChange}
        />
      </>
    </Layout>
  );
};