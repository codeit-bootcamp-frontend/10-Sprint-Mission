import Nav from "./Nav";


function App({ children }) {
  return (
    <div>
      <Nav></Nav>
      <div>{children}</div>
    </div>
  );
}

export default App;
