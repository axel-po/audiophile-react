import { useLocation } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Product from "../components/Product/Product";
import { ProductWrapper } from "../components/Product/Product.Style";
import Articles from "../components/Articles/Articles";
import { useFirestore } from "../utils/useFirestore";

export default function Headphones() {
  const headphones = useFirestore("headphones");

  const location = useLocation();

  return (
    <>
      <HeaderCategory title={location.pathname.replace("/", "")} />
      <ProductWrapper>
        {headphones.map((headphone) => {
          return (
            <Product
              key={headphone.id}
              id={headphone.id}
              image={headphone.image}
              name={headphone.name}
              desc={headphone.desc}
              features={headphone.features}
              price={headphone.price}
              inTheBox={headphone.inTheBox}
              newProduct={headphone.newProduct}
            />
          );
        })}
      </ProductWrapper>
      <Articles margin={"22rem 0"} />
    </>
  );
}
