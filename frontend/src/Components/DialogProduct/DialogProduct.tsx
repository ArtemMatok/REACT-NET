import { ProductGetWithIngredientsWithItems } from "@/Models/Product";
import { Dialog, DialogContent } from "@/ui/components/ui/dialog";
import { cn } from "@/ui/ui";
import { ChoosePizzaForm, ChooseProductForm } from "../index";

type Props = {
  product: ProductGetWithIngredientsWithItems;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function DialogDemo({ isOpen, product, onClose, className }: Props) {
  const isPizzaForm = Boolean(product.productItems[0].pizzaType);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.image}
            name={product.name}
            ingredients={product.ingredients}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.image}
            name={product.name}
          />
        )}
        {/* <Link to={`product/${product.productId}`}>
          <Button>See full information</Button>
        </Link> */}
      </DialogContent>
    </Dialog>
  );
}
