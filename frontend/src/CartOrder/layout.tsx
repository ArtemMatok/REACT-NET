import { Container, Header } from "@/Shared/Components/index";
import React, { useEffect } from "react";
import { Outlet } from "react-router";

type Props = {};

const CartOrderLayout = () => {
  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Header
          hasCart={false}
          hasSearch={false}
          className="border-b-gray-200"
        ></Header>
        <Outlet></Outlet>
      </Container>
      
    </main>
  );
};

export default CartOrderLayout;
