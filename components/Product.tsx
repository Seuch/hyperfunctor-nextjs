import Link from "next/link";

interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

type ProductDetails = Pick<ProductDetailsProps, "id" | "title" | "image">;

export const ProductListItemDetails = ({
  title,
  price,
  description,
  image,
}: ProductDetailsProps) => {
  return (
    <div className="border-2 shadow-xl rounded">
      <img className="w-full" src={image} alt={title} />
      <p className="text-3xl font-bold p-4">{title}</p>
      <p className="p-4">{description}</p>
      <p className="p-4">${price}</p>
    </div>
  );
};

export const ProductListItem = (data: ProductDetails) => {
  return (
    <Link href={`/products/${data.id}`}>
      <div className="hover:shadow-xl w-5/6 h-full flex flex-col items-center">
        <img className="w-5/6 h-2/3" src={data.image} alt={data.title} />
        <p className="w-4/4 h-1/4 text-3xl font-bold p-4">{data.title}</p>
      </div>
    </Link>
  );
};
