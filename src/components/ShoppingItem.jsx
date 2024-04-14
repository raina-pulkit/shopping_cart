import { useContext, useState } from "react";
import { Contexts } from "../context";

export default function ShoppingItem({ item }) {
  const { cart, addToCart } = useContext(Contexts);

  return (
    <>
      <div className="flex flex-col justify-evenly items-center border-2 border-red-900 gap-3 sm:p-4 p-2 h-auto mt-5 sm:mt-10 ml-5 rounded-xl sm:w-auto w-72">
        <div className="h-[180px]">
          <img src={item?.image} className="object-cover h-full w-full" />
        </div>
        <h2 className="font-semibold text-center text-xl truncate w-full">
          {item?.title}
        </h2>
        <p>Rs. {item?.price}</p>
        <button
          className={`text-white border-2 rounded-lg font-bold p-4 transition duration-300 hover:scale-95 active:scale-90 ${
            cart.find((obj) => obj.id === item.id)
              ? "bg-red-500 hover:bg-red-950"
              : " bg-green-500 hover:bg-green-950"
          }`}
          onClick={() => addToCart(item)}
        >
          {cart.find((obj) => obj.id === item.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}
