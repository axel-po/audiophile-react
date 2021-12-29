import { useLocation } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import { ProductWrapper } from "../components/Product/Product.Style";
import Product from "../components/Product/Product";
import Articles from "../components/Articles/Articles";
import { useFirestore } from "../utils/useFirestore";

export default function Earphones() {
  const location = useLocation();
  const earphones = useFirestore("earphones");

  return (
    <div>
      <HeaderCategory title={location.pathname.replace("/", "")} />
      <ProductWrapper>
        {earphones.map((earphone) => {
          return (
            <Product
              key={earphone.id}
              id={earphone.id}
              image={earphone.image}
              name={earphone.name}
              desc={earphone.desc}
              features={earphone.features}
              price={earphone.price}
              inTheBox={earphone.inTheBox}
              newProduct={earphone.newProduct}
            />
          );
        })}
      </ProductWrapper>
      <Articles margin={"22rem 0"} />
    </div>
  );
}
