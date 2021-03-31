import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setTest } from './redux/test/test.actions';
import { selectTestTest } from './redux/test/text.selectors';

function App() {
  const dispatch = useDispatch()
  const selectTest = useSelector(selectTestTest)

  useEffect(() => {
    const func = async () => {
      await dispatch(setTest([1, 2]))

    }
    func() 
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <div className="App">
      {selectTest?.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}

export default App;
