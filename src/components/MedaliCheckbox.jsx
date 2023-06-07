import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MedaliCheckbox = ({ setAtlet, getAtlet }) => {
  const [medaliFilter, setMedaliFilter] = useState([]);
  const [jenisKelaminFilter, setJenisKelaminFilter] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  // Extract the "medal" parameter from the URL search params
  const urlParams = new URLSearchParams(location.search);

  // const selectedMedalFromUrl = urlParams.get('medali');

  useEffect(() => {
    const selectedMedalFromUrl = urlParams.get('medali');
    const selectedGenderFromUrl = urlParams.get('jenisKelamin');

    if (selectedMedalFromUrl) {
      setMedaliFilter(selectedMedalFromUrl.split(','));
    }

    if (selectedGenderFromUrl) {
      setJenisKelaminFilter(selectedGenderFromUrl.split(','));
    }

    // getAtletByMedali();
    const fetchAtletData = async () => {
      try {
        const params = {};

        if (medaliFilter.length > 0) {
          params.medali = medaliFilter.join(',');
        }

        if (jenisKelaminFilter) {
          params.jenisKelamin = jenisKelaminFilter;
        }

        const queryString = Object.entries(params)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join('&');

        const url = `http://localhost:5000/atlet?${queryString}`;
        const response = await fetch(url);
        const data = await response.json();
        setAtlet(data); // Use the response data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAtletData();
  }, [location.search]);

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'medali') {
      handleMedali(value, checked);
    } else if (name === 'jk') {
      handleJenisKelamin(value, checked);
    }
  };

  const handleMedali = (medali, checked) => {
    if (checked) {
      setMedaliFilter([...medaliFilter, medali]);
    } else {
      setMedaliFilter(medaliFilter.filter((m) => m !== medali));
    }
  };

  const handleJenisKelamin = (jk, checked) => {
    setJenisKelaminFilter(checked ? jk : '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    urlParams.delete('jenisKelamin');
    urlParams.delete('medali');

    // Create a comma-separated string of selected medals
    // const selectedMedalsString = medaliFilter.join(',');

    // Update the URL search params with the selected medals
    // const searchParams = new URLSearchParams();
    // searchParams.set('medali', selectedMedalsString);

    if (medaliFilter.length > 0) {
      urlParams.set('medali', medaliFilter.join(','));
    }

    if (jenisKelaminFilter) {
      urlParams.set('jenisKelamin', jenisKelaminFilter);
    }
    getAtlet();

    // Update the browser history with the new URL
    navigate(`/?${urlParams.toString()}`);
  };

  return (
    <div>
      {/* <h1>{medaliFilter.length}</h1> */}
      <form onSubmit={handleSubmit}>
        <h3 className='mb-2 font-semibold text-gray-900 dark:text-white'>
          Medali
        </h3>
        <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
          <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                id='emas-checkbox'
                type='checkbox'
                name='medali'
                value='emas'
                checked={medaliFilter.includes('emas')}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                onChange={handleCheckboxChange}
              />
              <label
                for='emas-checkbox'
                className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Emas
              </label>
            </div>
          </li>

          <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                id='perak-checkbox'
                type='checkbox'
                name='medali'
                value='perak'
                checked={medaliFilter.includes('perak')}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                onChange={handleCheckboxChange}
              />
              <label
                for='perak-checkbox'
                className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perak
              </label>
            </div>
          </li>

          <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                id='perunggu-checkbox'
                name='medali'
                type='checkbox'
                value='perunggu'
                checked={medaliFilter.includes('perunggu')}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                onChange={handleCheckboxChange}
              />
              <label
                for='perunggu-checkbox'
                className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perunggu
              </label>
            </div>
          </li>
        </ul>

        <h3 className='mb-2 mt-5 font-semibold text-gray-900 dark:text-white'>
          Jenis Kelamin
        </h3>
        <ul className='w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
          <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                id='l-checkbox'
                name='jk'
                type='checkbox'
                value='L'
                checked={jenisKelaminFilter === 'L'}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                onChange={handleCheckboxChange}
              />
              <label
                for='l-checkbox'
                className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Laki-Laki
              </label>
            </div>
          </li>
          <li className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                id='l-checkbox'
                name='jk'
                type='checkbox'
                value='P'
                checked={jenisKelaminFilter === 'P'}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                onChange={handleCheckboxChange}
              />
              <label
                for='p-checkbox'
                className='w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Perempuan
              </label>
            </div>
          </li>
        </ul>
        <button type='submit' className='mt-5'>
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default MedaliCheckbox;
