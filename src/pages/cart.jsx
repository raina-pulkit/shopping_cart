import { useContext, useEffect, useState } from "react";
import { Contexts } from "../context";
import ErrorDisplay from "../components/ErrorDisplay";
import ShoppingItem from "../components/ShoppingItem";

export default function Cart() {
  const { cart } = useContext(Contexts);
  let tot = 0;
  cart.forEach(element => {
	tot += element.price;
  });

  const [totCost, setTotCost] = useState(tot);

  const calcCost = () => {
	let tot = 0;
	cart.forEach(element => {
		tot += element.price;
	});
	setTotCost(tot);
  };

  useEffect(() => calcCost(), [cart]);

  return (
    <>
      {cart && cart.length ? (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 max-w-6xl mx-auto p-3">
            {cart.map((item, ind) => (
              <ShoppingItem key={ind} item={item} />
            ))}
          </div>
          <div className="space-x-5 space-y-10 max-w-6xl mx-auto p-3">
            <span className="text-red-700 font-extrabold">
              Cost: Rs. {totCost}
            </span>
          </div>
        </>
      ) : (
        <ErrorDisplay msg="No items added to cart!" />
      )}
    </>
  );
}
