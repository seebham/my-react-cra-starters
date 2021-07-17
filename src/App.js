import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <h2>Hey! This is the basic minimal-starter</h2>
        <ul>
          <li>Change the title - public/index.html</li>
          <li>Change Description Meta tag on - public/index.html line: 9</li>
          <li>Clear this list from src/App.js and start coding!</li>
        </ul>
      </AppContainer>
    </div>
  );
}

export default App;
