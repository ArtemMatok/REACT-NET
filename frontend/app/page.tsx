import { Categories } from "@/components/shared/Categories";
import {  Container, SortPopup, Title, TopBar, Filters } from "@/components/shared/index";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return <>
      <Container className="mt-10">
        <Title text={"All pizza"} size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              List of goods
            </div>
          </div>
        </div>
      </Container>
    
    </>
  
}
