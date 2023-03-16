interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

type ProductDetails = Pick<ProductDetailsProps, "title" | "image">;

export const ProductListItemDetails = ({
  id,
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
    <div className="border-2 shadow-xl rounded">
      <img className="w-full" src={data.image} alt={data.title} />
      <p className="text-3xl font-bold p-4">{data.title}</p>
    </div>
  );
};
