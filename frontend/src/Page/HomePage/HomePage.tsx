import {
  Categories,
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/Components/index";
import { CategoryGetWithProducts } from "@/Models/Category";
import { GetCategoryWithFullProduct } from "@/Services/Category";
import { useEffect, useRef, useState } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const[categories, setCategories] = useState<CategoryGetWithProducts[]>([]);
  // const categoriesFromLocal = localStorage.getItem("categories");
  // const categories:CategoryGetWithProducts[] = JSON.parse(categoriesFromLocal!).data;
  useEffect(()=>{
    const getCategories = async() => {
      const res = await GetCategoryWithFullProduct();
      setCategories(res);
    }
    getCategories();
  },[])  

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
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
