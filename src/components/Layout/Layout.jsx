import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { ColorRing } from 'react-loader-spinner';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;

  &.active {
    color: orange;
  }
  :hover {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div>
      <header>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <StyledLink to="/">Home page</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
