import { cn } from "@/ui/ui";
import React from "react";
import { CartButton, Container, SearchInput } from "../index/index";
import photo from "@/images/logo.png";
import { Button } from "@/ui/components/ui/index";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  hasCart?: boolean;
  hasSearch?: boolean;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => (
  <header className={cn("border-b", className)}>
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

      {hasSearch && (
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
      )}

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button variant={"outline"} className="flex items-center gap-1">
          <User size={16} />
          Login
        </Button>

        {hasCart && (
          <div>
            <CartButton />
          </div>
        )}
      </div>
    </Container>
  </header>
);

export default Header;
