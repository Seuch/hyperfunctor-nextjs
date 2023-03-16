import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductListItemDetails } from "../../../components/Product";

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Błąd</div>;
  }

  return (
    <div>
      <ProductListItemDetails
        id={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        image={data.image}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreAPIProducts[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    // paths: [
    //   {
    //     params: { id },
    //   },
    // ],
    fallback: false,
  };
};

export type InferGetStaticPathsType<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? R
  : never;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  if (!params?.id)
    return {
      props: {},
      notFound: true,
    };

  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`);
  const data: StoreAPIProducts | null = await res.json();

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

export default ProductIdPage;
