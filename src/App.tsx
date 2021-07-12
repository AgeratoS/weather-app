import './App.css';
import Search from "./components/Search";
import LayoutPrediction from './components/LayoutPrediction'

function App() {
  const res = [{ value: 'Lesha' }, { value: 'Dima' }]

  return (
    <div>
      <Search value={"AdfasdC"} onChange={event => {
        return null
      }} />
      <LayoutPrediction component={res} />
    </div>
  );
}

export default App;
