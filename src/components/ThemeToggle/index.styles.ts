import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightblue;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
`;

export const ToggleInput = styled.input`
  margin-right: 10px;
`;

export const AppContainer = styled.div<{ theme: any }>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
`;
