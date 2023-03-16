interface ProductComponentProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const Product = ({
  id,
  title,
  price,
  description,
  image,
}: ProductComponentProps) => {
  return (
    <div className="border-4 shadow-xl rounded">
      <img className="w-full" src={image} alt={title} />
      <p className="text-3xl font-bold p-4">{title}</p>
      <p className="p-4">{description}</p>
      <p className="p-4">${price}</p>
    </div>
  );
};
