
import { useState, useEffect } from 'react';
import './App.css';
import { DisplayComponent } from './components/displaypage';
import { FilterPanel } from './components/sidepanel';
let filterdata = {};
function App() {
  const [filterData, setFilterData] = useState({});
  const [data, setData] = useState([]);
  let url = 'https://api.spacexdata.com/v3/launches?limit=100';
  useEffect(()=> {
    fetchData();
  }, []);

const fetchData = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => setData(data));
}
  const applyFilter = (filterType, filterData) => {
    filterdata = {...filterdata, ...{[filterType]: filterData}};
    url = url + '&' +new URLSearchParams(filterdata);
    fetchData();
  }
  return (
    <div className="main-container container-fluid pl-0">
      <div className="left-panel">
        <FilterPanel applyFilter={applyFilter}/>
      </div>
      <div className="right-panel" >
        <DisplayComponent data={data} filterdata={filterdata}/>
      </div>
    </div>
  );
}

export default App;
