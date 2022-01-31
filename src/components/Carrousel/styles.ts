import styled, { keyframes } from 'styled-components';

type TCarrouselProps = {
  image: string;
}

type TCarrouselNavItemProps = {
  active: boolean;
}

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarrouselContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const Carrousel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 550px;

  background: black url(${(props: TCarrouselProps) => props.image}) no-repeat center center;
  background-size: cover;

  transition: background 1s;
  a {
    cursor: pointer;

    display: flex;
    align-items: center;

    font-size: 2rem;
    height: 100%;
    padding: 2rem;

    background: #02000199;
    color: white;
  }
`;

const CarrouselNav = styled.div`
  display: flex;
  gap: 1rem;
`;

const CarrouselNavItem = styled.div`
  cursor: pointer;
  
  width: 1rem;
  height: 1rem;

  border: 1px solid black;
  border-radius: 50%;
  color: black;

  background: ${(props: TCarrouselNavItemProps) => props.active ? "black" : ""};

  &:hover {
    background: black;
  }
`;

export { CarrouselContainer, Carrousel, CarrouselNav, CarrouselNavItem }

