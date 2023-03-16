import { InferGetStaticPropsType } from "next";
import {
  ProductListItem,
  ProductListItemDetails,
} from "../../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.map((product) => {
        return (
          <li key={product.id}>
            <ProductListItem title={product.title} image={product.image} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsPage;

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
