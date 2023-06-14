export const MovieItem = ({ movie }) => {
  const { poster_path, original_title, overview, genres, release_date } = movie;
  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div>
        {original_title} ({release_date && release_date.substring(0, 4)})
      </div>
      <div>User Score: </div>
      <div>Overview</div>
      <div>{overview}</div>
      <div>Genres</div>
      <div>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </div>
    </section>
  );
};
