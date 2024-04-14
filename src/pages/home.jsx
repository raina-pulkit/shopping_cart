import { useContext, useEffect } from "react";
import { Contexts } from "../context";
import { Circles } from "react-loader-spinner";
import ErrorDisplay from "../components/ErrorDisplay";
import ShoppingItem from "../components/ShoppingItem";

export default function Home() {
  const url = "https://fakestoreapi.com/products";
  const { products, setProducts, loading, setLoading, errMsg, setErrMsg } =
    useContext(Contexts);

  async function fetchProds() {
    setLoading(true);
    setErrMsg(null);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrMsg(e.message);
    }
  }

  useEffect(() => {
    fetchProds();
  }, [url]);

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  return (
    <div className="min-h-screen w-full flex flex-wrap justify-center items-center">
      {loading ? (
        <Circles height={"120"} width={"120"} color="maroon" visible={true} />
      ) : errMsg ? (
        <ErrorDisplay msg={errMsg} />
      ) : products && products.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-5 space-y-10 max-w-6xl mx-auto p-3">
          {products.map((item, ind) => (
            <ShoppingItem key={ind} item={item}/>
          ))}
        </div>
      ) : null}
    </div>
  );
}
