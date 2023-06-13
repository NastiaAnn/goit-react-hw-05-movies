import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <NavLink to="/">Home page</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
