import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 25px;
  font-weight: 500;
  font-size: 18px;
  color: #0000CD;
  background-color: transparent;
  border: 1px solid #0000CD;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--main-shadow);
  transition: all 300ms ease-in-out;
  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
  :focus {
    color: var(--bg);
    background-color: var(--accent);
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;