import { InferGetStaticPropsType } from "next";
import { Product } from "../../components/Product";

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
      {data.map((product) => {
        return (
          <li key={product.id}>
            <Product
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
