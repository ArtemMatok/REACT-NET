import React, { useEffect } from "react";
import { Outlet } from "react-router";

type Props = {};

const CartOrderLayout = () => {
  useEffect(() => {
    document.title = "Cart"; // Задаємо назву сторінки
  }, []); // Порожній масив залежностей означає, що ефект виконається один раз при монтуванні компонента

  return (
    <main className="min-h-screen bg-[#F4F1EE]">
        <Outlet></Outlet>
    </main>  
  )
};

export default CartOrderLayout;
