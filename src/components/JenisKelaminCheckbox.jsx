import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JenisKelaminCheckbox = ({ setAtlet, getAtlet }) => {
  const [jenisKelamin, setjenisKelamin] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract the "medal" parameter from the URL search params
  const urlParams = new URLSearchParams(location.search);
  const selectedMedalFromUrl = urlParams.get('jenisKelamin');

  useEffect(() => {
    const selectedMedalFromUrl = urlParams.get('jenisKelamin');
    if (selectedMedalFromUrl) {
      setjenisKelamin(selectedMedalFromUrl.split(','));
    }
    getAtletByJk();
  }, [location.search]);

  const getAtletByJk = () => {
    fetch(`http://localhost:5000/atlet?jenisKelamin=${jenisKelamin.toString()}`)
      .then((res) => res.json())
      .then((data) => setAtlet(data));
  };

  const handleJenisKelamin = (e) => {
    let jenisKelaminArray = [...jenisKelamin];
    if (e.target.checked) {
      jenisKelaminArray = [...jenisKelamin, e.target.value];
    } else {
      jenisKelaminArray.splice(jenisKelamin.indexOf(e.target.value), 1);
    }
    setjenisKelamin(jenisKelaminArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a comma-separated string of selected medals
    const selectedMedalsString = jenisKelamin.join(',');

    // Update the URL search params with the selected medals
    // const searchParams = new URLSearchParams();
    // searchParams.set('medali', selectedMedalsString);

    if (jenisKelamin.length > 0) {
      urlParams.set('jenisKelamin', selectedMedalsString);
    } else {
      urlParams.delete('jenisKelamin');
      getAtlet();
    }

    // Update the browser history with the new URL
    navigate(`/?${urlParams.toString()}`);
  };

  const jenisKelaminList = ['L', 'P'];

  return (
    <div>
      {/* <h1>{jenisKelaminFilter.length}</h1> */}
      <form onSubmit={handleSubmit}>
        <h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>
          Jenis Kelamin
        </h3>
        <ul class='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
          {jenisKelaminList.map((jk, index) => (
            <li
              class='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'
              key={index}
            >
              <div class='flex items-center pl-3'>
                <input
                  id='emas-checkbox'
                  type='checkbox'
                  value={jk}
                  class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  onChange={handleJenisKelamin}
                />
                <label
                  for='emas-checkbox'
                  class='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  {jk}
                </label>
              </div>
            </li>
          ))}
          <button type='submit'>Filter</button>
        </ul>
      </form>
    </div>
  );
};

export default JenisKelaminCheckbox;
