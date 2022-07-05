import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Link from "next/dist/client/link";
import Image from "next/image";
import { Store } from "../../utils/store";

export default function ProductScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

     if(product.countInStock <quantity){
      alert('Sorry,Product is out of stock');
      return ;
     }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
     router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li className="text-lg">
              <strong>Category:</strong> {product.category}
            </li>
            <li className="text-lg">
              <strong>Brand :</strong> {product.brand}
            </li>
            <li className="text-lg">
              <strong>Rating :</strong>
              {product.rating}
            </li>
            <li className="text-lg">
              <strong>Description : </strong>
              {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div className="font-semibold">Price</div>
              <div>₹{product.price}</div>
            </div>

            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? "In Stock " : "Unavailable"}
              </div>
            </div>
            <div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
