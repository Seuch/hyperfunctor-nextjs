import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";
import { ProductListItemDetails } from "../../components/Product";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreAPIProducts[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, data, error } = useQuery("products", getProducts);

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
            <ProductListItemDetails
              id={product.id}
              description={product.description}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCSRPage;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreAPIProducts[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

interface StoreAPIProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
