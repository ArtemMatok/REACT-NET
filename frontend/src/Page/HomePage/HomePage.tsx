import {
  Categories,
  Container,
  Filters,
  ProductCard,
  SortPopup,
  Title,
  TopBar,
} from "@/Components/index";

import React from "react";

type Props = {};

const HomePage = (props: Props) => {
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
              
            </div>
          </div>
        </div>
      </Container>
      
    </>
  );
};

export default HomePage;
