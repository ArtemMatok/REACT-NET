import GroupVariants from "@/Shared/Components/GroupVariants/GroupVariants";
import { Container, PizzaImage, Title } from "@/Shared/Components/index/index";
import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";
import { GetProductById } from "@/Shared/Services/Product";

import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

interface Props {
  className?: string;
}

export const ProductPage: React.FC<Props> = ({ className }) => {
  let { id } = useParams<string>();
  const [product, setProduct] = useState<ProductGetWithIngredientsWithItems>();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getProductById = async () => {
      const result = await GetProductById(Number(id));
      console.log("result:", result);
      if (result.status === 404) {
        setNotFound(true);
      } else {
        setProduct(result.data);
      }
    };
    getProductById();
  }, [id]);

  if (notFound) {
    navigate("/notFound");
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product?.image} size={50} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product ? product.name : ""} size="md" className="font-extrabold mb-1" />

          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>


          <GroupVariants 
            value="2"
            items={[
              {
                name:'Small',
                value:"1"
              },
              {
                name:'Middle',
                value:"2"
              },
              {
                name:'Big',
                value:"3"
              }
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
