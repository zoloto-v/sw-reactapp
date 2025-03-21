import { Layout } from "../../shared/ui/layouts";
import { Dropdown } from "../../shared/ui/dropdown";
import { CharacterPreview } from "../../widgets/character-preview";
import styles from "../characters/characters.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/lib";
import { selectCharacterList } from "../../app/model";
import { getCharacterList } from "../../entities/character/model/character-list-slice";
import { Pagination } from "../../features/pagination";
import { ReactPaginateProps } from "react-paginate";
import { setFilter } from "../../entities/character/model/character-list-slice";
import type { RootState } from "../../app/model";
import {
  clear,
  getCharacterDetails,
} from "../../entities/character/model/character-details-slice";
import { createPortal } from "react-dom";
import { CharacterDetailsModal } from "../../entities/character/ui";
import Skeleton from "react-loading-skeleton";
const skeletonsList = new Array(9)
  .fill(null)
  .map((_, i) => ({ name: String(i), url: "#" }));

export const CharactersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();

  const expensiveFiltering = (
    item: Record<string, string | number | boolean>,
    filter: Record<string, string | number | boolean>
  ) => {
    for (const key in filter) {
      if (key in item && filter[key] && filter[key] !== item[key]) {
        return false;
      }
    }

    return true;
  };

  const { filter } = useAppSelector(selectCharacterList);

  const { data, count, isPending, isError } = useAppSelector(
    (state: RootState) => {
      const { data, count, isPending, isError, filter } = state.characterList;
      const filteredData = data.filter((item) =>
        expensiveFiltering(item, { eye_color: filter })
      );
      // const sortedData = expensiveSorting(filteredData)
      // const transformedData = expensiveTransformation(sortedData)

      return {
        data: filteredData,
        count,
        isPending,
        isError,
      };
    }
  );

  useEffect(() => {
    dispatch(getCharacterList());
  }, []);

  const pagesCount = Math.ceil(Number(count) / 10);

  const onChange = (value: string) => {
    dispatch(setFilter(value));
  };

  const onPageChange: ReactPaginateProps["onPageChange"] = ({ selected }) => {
    dispatch(setFilter(null));
    dispatch(getCharacterList(selected + 1));
  };

  const openModal = (url: string) => {
    const { pathname } = new URL(url);
    dispatch(getCharacterDetails(pathname));
    setShowModal(true);
  };

  const closeModal = () => {
    dispatch(clear());
    setShowModal(false);
  };

  const intlMenu = [
    {
      text: "english",
      value: "en",
    },
    {
      text: "wookiee",
      value: "wookiee",
    },
  ];

  const filterOptions = [
    {
      text: "all",
      value: "",
    },
    {
      text: "brown",
      value: "brown",
    },
    {
      text: "red",
      value: "red",
    },
    {
      text: "blue",
      value: "blue",
    },
    {
      text: "white",
      value: "white",
    },
  ];

  return (
    <Layout>
      <div className={styles.intl}>
        <span className="mr-12">language</span>
        <Dropdown onChange={onChange} selected={"en"} items={intlMenu} />
      </div>

      <h2>
        {isPending ? (
          <Skeleton count={1} width="600px" />
        ) : (
          `${count} peoples for you to choose your favorite`
        )}
      </h2>

      <div className={styles.filter}>
        <span className="mr-12">color eye</span>
        <Dropdown
          onChange={onChange}
          selected={filter ?? ""}
          items={filterOptions}
        />
      </div>
      <>
        {isError && (
          <div className={styles.characters__statuses}>
            something went wrong
          </div>
        )}
        {isPending && (
          <div className={styles.characters}>
            {skeletonsList.map((item) => (
              <CharacterPreview
                {...item}
                key={item.name}
                isPending={isPending}
                onClick={() => openModal(item.url)}
              />
            ))}
          </div>
        )}
        {!isPending && !isError && data && (
          <>
            <div className={styles.characters}>
              {data.map((item) => (
                <CharacterPreview
                  {...item}
                  key={item.name}
                  isPending={isPending}
                  onClick={() => openModal(item.url)}
                />
              ))}
            </div>
          </>
        )}
        <Pagination count={pagesCount} onPageChange={onPageChange} />
      </>

      {showModal &&
        createPortal(
          <CharacterDetailsModal onClose={closeModal} />,
          document.body
        )}
    </Layout>
  );
};
