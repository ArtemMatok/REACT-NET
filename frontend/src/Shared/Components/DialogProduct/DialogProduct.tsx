import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";
import { Dialog, DialogContent } from "@/ui/components/ui/dialog";
import { cn } from "@/ui/ui";
import { ChoosePizzaForm, ChooseProductForm, Filters } from "../index/index";
import { useCartState } from "@/Shared/Store/Cart";
import toast from "react-hot-toast";

type Props = {
  product: ProductGetWithIngredientsWithItems;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export function DialogDemo({ isOpen, product, onClose, className }: Props) {
  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(product.productItems[0].pizzaType);
  const [addCartItem, loading] = useCartState((state) => [state.addCartItem, state.loading]);

  const onAddProuct = () => {
    addCartItem({
      productItemId: firstItem.productItemId,
      ingredientsId: [],
    });
  };

  const onAddPizza = async (
    prouctItemId: number,
    ingredientsId: number[]
  ) => {
    try {
      await addCartItem({
        productItemId: prouctItemId,
        ingredientsId: ingredientsId,
      });
      toast.success("Pizza was added to the cart")
      onClose();
    } catch (error) {
      toast.error("Could not add pizza to the cart")
      console.error(error)
    }

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
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.image}
            name={product.name}
            onSubmit={onAddProuct}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
