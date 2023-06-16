import { FormLabel, FormText, SubmitButton, SearchForm } from './styled';

export const SearchBar = ({ handleSubmit, updateString }) => {
  return (
    <SearchForm onSubmit={handleSubmit}>
      <FormLabel>
        <FormText type="text" name="query" onChange={updateString} />
      </FormLabel>
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchForm>
  );
};
