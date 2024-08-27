import {

  Container,
  Filters,

  ProductsGroupList,

  Title,
  TopBar,
} from "@/Components/index";
import { GetCategoriesWithProductsWithIngredients } from "@/Services/Category";
import { Item } from "@radix-ui/react-select";

import React, { useEffect } from "react";

type Props = {};

const HomePage = (props: Props) => {

  useEffect(()=>{
    const getCategoriesWithProductsWithIngrediets =async() => {
      const result = await GetCategoriesWithProductsWithIngredients();
      console.log(result);
      return result;
    }
    getCategoriesWithProductsWithIngrediets();
  },[])
  
  return (
    <>
      <Container className="mt-5">
        <Title text="All Pizza" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex-1"> 
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Pizza"
                categoryId={1}
                items={[
                  {
                    id:1,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:2,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:3,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:4,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:5,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:6,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  }
                ]}
              />
              <ProductsGroupList 
                title="Combo"
                categoryId={2}
                items={[
                  {
                    id:1,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:2,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:3,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:4,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:5,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  },
                  {
                    id:6,
                    name:"Beef Stroganoff",
                    imageUrl:"https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price:7,
                    items:[{price:7}]
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default HomePage;
