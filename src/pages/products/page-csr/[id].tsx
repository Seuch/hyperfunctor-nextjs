import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ProductListItem } from "../../../../components/Product";

const getProductsPerPage = async (urlID: number | number[] | undefined) => {
  if (typeof urlID === "number") {
    const res = await fetch(
      `https://naszsklep-api.vercel.app/api/products?take=25&offset=${
        (urlID - 1) * 25
      }`
    );
    const data: StoreAPIProductsPerPage[] = await res.json();
    return data;
  } else return;
};

function parseToInt(value: string | string[] | undefined) {
  if (typeof value === "string") {
    return parseInt(value);
  } else if (Array.isArray(value)) {
    return value.map((str) => parseInt(str));
  } else if (typeof value === "undefined") {
    return undefined;
  }
}

interface StoreAPIProductsPerPage {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}

const ProductPaginationId = () => {
  const router = useRouter();

  if (typeof router.query.id !== "undefined") {
    const { isLoading, data, error } = useQuery("productsPerPage", () =>
      getProductsPerPage(parseToInt(router.query.id))
    );

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!data || error) {
      return <div>Błąd</div>;
    }

    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((product) => {
          return (
            <li key={product.id}>
              <ProductListItem
                id={parseInt(product.id)}
                title={product.title}
                image={product.image}
              />
            </li>
          );
        })}
      </ul>
    );
  }
};

export default ProductPaginationId;
