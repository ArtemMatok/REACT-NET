import { ProductGetWithIngredientsWithItems } from "@/Models/Product";
import { Button } from "@/ui/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/components/ui/dialog"
import { cn } from "@/ui/ui";
import { Title } from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";


type Props ={
    product:ProductGetWithIngredientsWithItems,
    isOpen:boolean;
    onClose: () => void;
    className?:string;
}

export function DialogDemo({isOpen,product, onClose, className}:Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    
      <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",className)}>
        <Title>{product?.name}</Title>
        <Link to={`product/${product.productId}`}>
          <Button>See full information</Button>
        </Link>
      </DialogContent>
     
      
    </Dialog>
  )
}