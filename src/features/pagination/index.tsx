import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import styles from "./pagination.module.css";

export const Pagination: React.FC<{
  count: number;
  onPageChange?: ReactPaginateProps['onPageChange'];
}> = ({count, onPageChange}) => {
  return (
    <div className={styles["pagination-wrapper"]}>
      <ReactPaginate 
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={Number(count)}
        previousLabel="<"
        pageClassName={styles["page-item"]}
        pageLinkClassName={styles["page-link"]}
        previousClassName={styles["page-item"]}
        previousLinkClassName={styles["page-link"]}
        nextClassName={styles["page-item"]}
        nextLinkClassName={styles["page-link"]}
        breakLabel="..."
        breakClassName={styles["page-item"]}
        breakLinkClassName={styles["page-link"]}
        containerClassName={`${styles.pagination}`}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};