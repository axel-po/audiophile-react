import { useLocation } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import { ProductWrapper } from "../components/Product/Product.Style";
import Product from "../components/Product/Product";
import Articles from "../components/Articles/Articles";
import { useFirestore } from "../utils/useFirestore";

export default function Speakers() {
  const location = useLocation();
  const speakers = useFirestore("speakers");

  return (
    <div>
      <HeaderCategory title={location.pathname.replace("/", "")} />
      <ProductWrapper>
        {speakers.map((speaker) => {
          return (
            <Product
              key={speaker.id}
              id={speaker.id}
              image={speaker.image}
              name={speaker.name}
              desc={speaker.desc}
              features={speaker.features}
              price={speaker.price}
              inTheBox={speaker.inTheBox}
              newProduct={speaker.newProduct}
            />
          );
        })}
      </ProductWrapper>
      <Articles margin={"22rem 0"} />
    </div>
  );
}
