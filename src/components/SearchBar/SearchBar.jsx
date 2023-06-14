export const SearchBar = ({ handleSubmit, updateString }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="query" onChange={updateString} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
