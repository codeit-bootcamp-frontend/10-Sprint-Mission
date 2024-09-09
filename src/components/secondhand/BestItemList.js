import Item from "./Item";

import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import { useApi } from "../../hooks/useApi.js";
import { getProducts } from "../../apis/apis.js";

const pageSizeTable = { PC: 4, TABLET: 2, MOBILE: 1 };

export default function BestItemList() {
  const [media] = useMediaQuery();
  const [isLoading, error, data] = useApi(getProducts, {
    pageSize: pageSizeTable[media],
    orderBy: "favorite",
  });

  return (
    <section>
      <div>
        <h2>베스트 상품</h2>
      </div>
      {!isLoading && !error && (
        <div>
          {data.list.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
}
