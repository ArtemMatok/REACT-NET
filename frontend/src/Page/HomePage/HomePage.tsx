
import { DialogDemo } from "@/Shared/Components/DialogProduct/DialogProduct";
import {
  Categories,
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/Shared/Components/index/index";
import { CategoryGetWithProducts } from "@/Shared/Models/Category";
import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";
import { GetCategoryWithFullProduct } from "@/Shared/Services/Category";
import { useEffect, useRef, useState } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const[categories, setCategories] = useState<CategoryGetWithProducts[]>([]);
  const[selectedProduct, setSelectedProduct] = useState<ProductGetWithIngredientsWithItems | null>(null);
  const[isOpenModel, setIsOpenModel] = useState<boolean>(false);

  useEffect(()=>{
    const getCategories = async() => {
      const res = await GetCategoryWithFullProduct();
      setCategories(res);
    }
    getCategories();
  },[])  

  const handleProductClick = (product:ProductGetWithIngredientsWithItems) =>{
    setSelectedProduct(product);
    setIsOpenModel(true);
  }
  const closeModal =() =>{
    setIsOpenModel(false);
  }

  return (
    <>
    
      <Container className="mt-5">
        <Title text="All Pizza" size="lg" className="font-extrabold" />
      </Container>

      <TopBar 
        categories={categories.filter((category)=> category.products.length > 0)}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фільтрація */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список продуктів */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    
                    <ProductsGroupList 
                      key={category.categoryId}
                      title={category.name}
                      categoryId={category.categoryId}
                      items={category.products}
                      onProductClick={handleProductClick}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>

        {selectedProduct && (
          <DialogDemo 
            product={selectedProduct} 
            isOpen={isOpenModel}
            onClose={closeModal}
          />
        )}
       
      </Container>
    </>
  );
};

export default HomePage;
