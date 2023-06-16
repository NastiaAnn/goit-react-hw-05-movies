import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-top: 50px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 18px;
  font-weight: 400;
`;

export const FormText = styled.input`
  display: inline-block;
  padding: 8px 8px;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 8px;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;
`;
