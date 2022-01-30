import styled from 'styled-components';

type TProps = {
  active?: boolean;
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
`;

const ListItem = styled.li`
  color: ${(props: TProps) => props.active ? "red" : ""};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;    
  }
`;

export { HeaderContainer, HeaderNavbar, ListItem };