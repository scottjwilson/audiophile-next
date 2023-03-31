import { useCart } from "@/lib/Cart";
import formatMoney from "@/lib/formatMoney";
import { Product } from "@/prisma/types";
import React from "react";

export default function CartItem({ item }: any) {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();

  return (
    <div className="flex my-4">
      <div className="flex w-full ">
        <div className="flex items-center w-full space-x-4">
          <div>IMAGE</div>
          <div className="text-sm font-semibold">
            <h4 className="capitalize">{item.item.name}</h4>
            <p className="text-gray-600">{formatMoney(item.item.price)}</p>
          </div>
        </div>

        <div className="w-60 m-4 bg-gray-100 grid grid-cols-3">
          <button className="p-2" onClick={() => decreaseItemQuantity(item)}>
            &minus;
          </button>
          <input
            className="text-center bg-gray-100 text-black"
            type="number"
            placeholder={item.quantity}
          />
          <button className="p-2" onClick={() => increaseItemQuantity(item)}>
            +
          </button>
        </div>
      </div>
      {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
    </div>
  );
}
