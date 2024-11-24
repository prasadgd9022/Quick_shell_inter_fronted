import React, { useEffect, useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  const filterButtons = [
    { id: 'all', label: 'All Tasks' },
    { id: 'priority', label: 'Priority' },
    { id: 'deadline', label: 'Deadline' },
    { id: 'assigned', label: 'Assigned to Me' },
  ];

  return allTickets ? (
    <div>
      <NavBar />
      <div className="filterSection">
        {filterButtons.map(button => (
          <button
            key={button.id}
            className={`filterButton ${activeFilter === button.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <DashBoard filterType={activeFilter} />
    </div>
  ) : <Loading />
}

export default App