import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";
import { Dialog, DialogContent } from "@/ui/components/ui/dialog";
import { cn } from "@/ui/ui";
import { ChoosePizzaForm, ChooseProductForm, Filters } from "../index/index";
import { UpdateCartByAdding } from "@/Shared/Services/Cart";
import { CartItemGet } from "@/Shared/Models/CartItem";
import { ProductItemGet } from "@/Shared/Models/ProductItem";
import { useCartState } from "@/Shared/Store/Cart";

type Props = {
  product: ProductGetWithIngredientsWithItems;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function DialogDemo({ isOpen, product, onClose, className }: Props) {
  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(product.productItems[0].pizzaType);
  const addCartItem = useCartState((state) => state.addCartItem);

  const onAddProuct = () => {
    addCartItem({
      productItemId: firstItem.productItemId,
      ingredientsId: [],
    });
  };
  const onAddPizza = (
    prouctItemId: number,
    ingredientsId: number[]
  ) => {
    console.log("ProductIten+ingredients", {prouctItemId , ingredientsId})
    addCartItem({
      productItemId: prouctItemId,
      ingredientsId: ingredientsId,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px]  bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.image}
            name={product.name}
            ingredients={product.ingredients}
            items={product.productItems}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.image}
            name={product.name}
            onSubmit={onAddProuct}
            price={firstItem.price}
          />
        )}
        {/* <Link to={`product/${product.productId}`}>
          <Button>See full information</Button>
        </Link> */}
      </DialogContent>
    </Dialog>
  );
}
