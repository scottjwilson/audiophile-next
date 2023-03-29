"use client";
import { useCart } from "@/lib/Cart";

import React, { useState } from "react";

import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Product } from "@/prisma/types";
import Image from "next/image";
export default function SingleProduct({ product }: { product: Product }) {
  const { addToCart, cartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  function addItemToCart(e: React.SyntheticEvent) {
    e.preventDefault();
    addToCart(
      { id: product.id, name: product.name, price: product.price },
      quantity
    );
  }

  const icon = `h-4 w-4`;
  return (
    <form onSubmit={addItemToCart}>
      <div>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            {product.image && (
              <Image
                src={product.image.url}
                alt={product.name}
                width={500}
                height={500}
              />
            )}
          </div>
          <div className="col-span-1">
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <p>{product.price}</p>
            <div className="flex p-12">
              <button
                disabled={quantity < 2}
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                className="qty-btn"
              >
                <MinusIcon className={icon} />
              </button>

              <input
                id="quantity"
                type="number"
                value={quantity}
                disabled
                className="w-[3rem]"
              />

              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >
                <PlusIcon className={icon} />
              </button>
            </div>
            <button type="submit">add to cart</button>
          </div>
        </div>
      </div>
    </form>
  );
}
