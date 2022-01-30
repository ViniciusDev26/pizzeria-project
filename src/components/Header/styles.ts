import styled from 'styled-components';

type TProps = {
  active?: boolean;
  mobileOpened?: boolean;
}

const HeaderContainer = styled.header`
  width: 100%;
  background: #020001;
  color: #fff;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 425px) {
    display: block;
    visibility: ${(props: TProps) => props.mobileOpened ? 'visible' : 'hidden'} ;
    opacity: ${(props: TProps) => props.mobileOpened ? 1 : 0};
    transition: visibility 0.5s, opacity 0.5s linear;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #020001e0;

    ul {
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6rem;

      li {
        font-size: 1.5em;
      }
    }
  }
`;

const ListItem = styled.li`
  color: ${(props: TProps) => props.active ? "red" : ""};
  text-align: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
  }

  transition: filter .2s;
  &:hover {
    color: red;
    filter: brightness(0.7);
  }
`;

const HeaderMenuButton = styled.a`
  display: none;

  @media (max-width: 425px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    &:active {
      color: red;
    }
  }
`

export { HeaderContainer, HeaderNavbar, ListItem, HeaderMenuButton };