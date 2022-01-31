import { useState } from "react";
import { CarrouselContainer, Carrousel as CarrouselComponent, CarrouselNavItem, CarrouselNav } from "./styles"

type TCarrouselProps = {
  itens: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

const Carrousel = ({itens}: TCarrouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeCurrentslide = (action: string) => {
    if (action === "next") {
      if(currentSlide === (itens.length - 1)) {
        return setCurrentSlide(0);
      }

      setCurrentSlide(currentSlide + 1)
    }else if("previous"){
      if(currentSlide === 0) {
        return setCurrentSlide(itens.length - 1)
      }

      setCurrentSlide(currentSlide - 1)
    }else {
      setCurrentSlide(Number(action));
    }
  }

  return (
    <CarrouselContainer>
      <CarrouselComponent image={itens[currentSlide] ? itens[currentSlide].image : ''}>
        <a onClick={() => handleChangeCurrentslide("previous")}> {'<'} </a>
        <CarrouselNav>
          {itens.map((item, index) => (
            <CarrouselNavItem active={index === currentSlide} key={item?.id} onClick={() => handleChangeCurrentslide(index.toString())}/>
          ))}
        </CarrouselNav>
        <a onClick={() => handleChangeCurrentslide("next")}> {'>'} </a>
      </CarrouselComponent>
    </CarrouselContainer>
  )
}

export { Carrousel }