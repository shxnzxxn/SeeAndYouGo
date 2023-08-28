import './App.css';
import Box from './components/Box';

function App() {
  const array = [];

  // for(let i = 0; i < 5; i++) {
  //     array.push(<Box idx={i + 1} />);
  // }

  return (  
    <div className="App">
      <Box idx={2} />
      {/* {array.map((item) => {
          return item;
      })} */}
    </div>
  );
}

export default App;
