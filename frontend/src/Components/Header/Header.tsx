import { cn } from "@/ui/ui";
import React from "react";
import { Container, SearchInput } from "../index";
import photo from "@/images/logo.png";
import { Button } from "@/ui/components/ui/index";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => (
  <header className={cn("border border-b", className)}>
    <Container className="flex items-center justify-between py-8">
      {/* Left side */}
      <Link to={"/"}>
        <div className="flex itens-center gap-4">
          <img src={photo} width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">YUMMY</p>
          </div>
        </div>
      </Link>

      <div className="mx-10 flex-1">
        <SearchInput />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button variant={"outline"} className="flex items-center gap-1">
          <User size={16} />
          Login
        </Button>

        <div>
          <Button className="group relative">
            <b>$12</b>
            <span className="h-full w-[1px] bg-white/30 mx-3"></span>
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
