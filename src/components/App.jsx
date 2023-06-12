import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Тут буде домашня сторінка</div>} />
        <Route
          path="/movies"
          element={<div>тут буде сторінка пошуку фільмів</div>}
        />
      </Routes>
    </div>
  );
};
