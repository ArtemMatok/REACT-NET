import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./index";
import Image from "next/image";
import photo from "@/public/assets/images/logo.png";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Image src={photo} alt="logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">YUMMY</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-1" variant="outline">
            <User size={16} />
            Login
          </Button>

          <div>
            <Button className="group relative">
              <b>12$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
