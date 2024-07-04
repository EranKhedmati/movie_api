import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <div className="text-gray">
        Hello
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </>
  )
}

export default App
