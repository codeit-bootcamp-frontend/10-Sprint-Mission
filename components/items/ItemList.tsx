import { useState, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import useResize from "@/hooks/useResize";
import Card from "./Card";
import Dropdown from "../ui/Dropdown";
import Pagination from "./Pagination";
import { fetchData } from "@/lib/fetchData";
import { PRODUCT_URL } from "@/constants/url";
import { ProductProps, GetProductsResponseType } from "@/types/product";
import styles from "./ItemList.module.css";
import searchImg from "@/public/ic_search.svg";
import sortIcon from "@/public/ic_sort.svg";

const PAGE_SIZE_BY_SCREEN = {
  PC: 10,
  TABLET: 6,
  MOBILE: 4,
} as const;

type PageSizeType =
  (typeof PAGE_SIZE_BY_SCREEN)[keyof typeof PAGE_SIZE_BY_SCREEN];

const getPageSize = (width: number): PageSizeType => {
  if (width < 768) return PAGE_SIZE_BY_SCREEN.MOBILE;
  if (width < 1200) return PAGE_SIZE_BY_SCREEN.TABLET;

  return PAGE_SIZE_BY_SCREEN.PC;
};

const options = {
  recent: "최신순",
  favorite: "좋아요순",
} as const;
type OptionKey = keyof typeof options;

const fetchProducts = async ({
  queryKey,
}: {
  queryKey: [
    string,
    { order: OptionKey; pageSize: number; currentPage: number }
  ];
}) => {
  const [, { order, pageSize, currentPage }] = queryKey;
  const { list, totalCount } = await fetchData<GetProductsResponseType>(
    PRODUCT_URL,
    {
      query: {
        orderBy: order,
        pageSize,
        page: currentPage,
      },
    }
  );
  return { list, totalCount };
};

const ItemList = () => {
  const [pageSize, setPageSize] = useState<PageSizeType>(4);
  const [order, setOrder] = useState<OptionKey>("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const viewportWidth = useResize();

  const { data } = useQuery({
    queryKey: ["products", { order, pageSize: pageSize!, currentPage }],
    queryFn: fetchProducts,
    enabled: !!pageSize,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (!viewportWidth) return;

    const nextPageSize = getPageSize(viewportWidth);
    if (nextPageSize !== pageSize) {
      setPageSize(nextPageSize);
    }
  }, [viewportWidth, pageSize]);

  const products = data?.list || [];
  const totalCount = data?.totalCount || 0;

  return (
    <section className={styles.section}>
      <div className={styles.ProductListHeader}>
        <h2 className={styles.title}>전체 상품</h2>
        <div className={styles.inputContainer}>
          <Image src={searchImg} width={24} height={24} alt="검색" />
          <input
            className={styles.input}
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <Link href="/additem" className={styles.button}>
          상품등록하기
        </Link>
        <Dropdown
          className={styles.dropdown}
          onSelect={(value) => setOrder(value as OptionKey)}
          options={options}
        >
          <span>{options[order]}</span>
          <Image src={sortIcon} width={24} height={24} alt="드롭다운" />
        </Dropdown>
      </div>
      {products.length ? (
        <ul className={styles.products}>
          {products.map((product: ProductProps) => {
            return <Card key={product.id} product={product} />;
          })}
        </ul>
      ) : (
        <div>상품 목록이 없습니다.</div>
      )}
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </section>
  );
};

export default ItemList;
