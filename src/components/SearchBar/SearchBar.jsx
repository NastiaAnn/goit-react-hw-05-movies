import { FormLabel, FormText, SubmitButton, SearchForm } from './styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ handleFormSubmit }) => {
  const [value, setValue] = useState('');

  const updateString = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleFormSubmit(value);
    setValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <FormLabel>
        <FormText
          type="text"
          name="query"
          value={value}
          onChange={updateString}
        />
      </FormLabel>
      <SubmitButton type="submit">Search</SubmitButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
