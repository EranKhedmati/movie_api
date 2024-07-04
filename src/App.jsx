import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <div className="text-red-500">
        Hello
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </>
  )
}

export default App
