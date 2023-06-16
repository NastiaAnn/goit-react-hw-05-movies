import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
