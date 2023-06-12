import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav style={{ display: 'flex', gap: '30px' }}>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
