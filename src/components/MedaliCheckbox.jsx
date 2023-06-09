import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MedaliCheckbox = ({ setAtlet, getAtlet }) => {
  const [medaliFilter, setMedaliFilter] = useState([]);
  const [jenisKelaminFilter, setJenisKelaminFilter] = useState("");
  const [umurFilter, setUmurFilter] = useState({
    minumur: null,
    maxumur: null,
  });
  const [tinggiFilter, settinggiFilter] = useState({
    mintinggi: null,
    maxtinggi: null,
  });
  const [beratFilter, setberatFilter] = useState({
    minberat: null,
    maxberat: null,
  });
  const location = useLocation();
  const navigate = useNavigate();
  // Extract the "medal" parameter from the URL search params
  const urlParams = new URLSearchParams(location.search);

  // const selectedMedalFromUrl = urlParams.get('medali');

  useEffect(() => {
    const selectedMedalFromUrl = urlParams.get("medali");
    const selectedGenderFromUrl = urlParams.get("jenisKelamin");
    const selectedMinUmurFromUrl = urlParams.get("minumur");
    const selectedMaxUmurFromUrl = urlParams.get("maxumur");

    if (selectedMedalFromUrl) {
      setMedaliFilter(selectedMedalFromUrl.split(","));
    }

    if (selectedGenderFromUrl) {
      setJenisKelaminFilter(selectedGenderFromUrl.split(","));
    }

    // getAtletByMedali();
    const fetchAtletData = async () => {
      try {
        const params = {};

        if (medaliFilter.length > 0) {
          params.medali = medaliFilter.join(",");
        }

        if (jenisKelaminFilter) {
          params.jenisKelamin = jenisKelaminFilter;
        }

        if (umurFilter.minumur) {
          params.minumur = umurFilter.minumur;
        }

        if (umurFilter.maxumur) {
          params.maxumur = umurFilter.maxumur;
        }

        if (tinggiFilter.maxtinggi) {
          params.maxtinggi = tinggiFilter.maxtinggi;
        }

        if (tinggiFilter.mintinggi) {
          params.mintinggi = tinggiFilter.mintinggi;
        }

        if (beratFilter.maxberat) {
          params.maxberat = beratFilter.maxberat;
        }

        if (beratFilter.minberat) {
          params.minberat = beratFilter.minberat;
        }

        const queryString = Object.entries(params)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");

        const url = `http://localhost:5000/atlet?${queryString}`;
        const response = await fetch(url);
        const data = await response.json();
        setAtlet(data); // Use the response data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAtletData();
  }, [location.search]);

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "medali") {
      handleMedali(value, checked);
    } else if (name === "jk") {
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
    setJenisKelaminFilter(checked ? jk : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    urlParams.delete("jenisKelamin");
    urlParams.delete("medali");
    urlParams.delete("minumur");
    urlParams.delete("maxumur");
    urlParams.delete("mintinggi");
    urlParams.delete("maxtinggi");
    urlParams.delete("minberat");
    urlParams.delete("maxberat");

    // Create a comma-separated string of selected medals
    // const selectedMedalsString = medaliFilter.join(',');

    // Update the URL search params with the selected medals
    // const searchParams = new URLSearchParams();
    // searchParams.set('medali', selectedMedalsString);

    if (medaliFilter.length > 0) {
      urlParams.set("medali", medaliFilter.join(","));
    }

    if (jenisKelaminFilter) {
      urlParams.set("jenisKelamin", jenisKelaminFilter);
    }

    if (umurFilter.minumur) {
      urlParams.set("minumur", umurFilter.minumur);
    }

    if (umurFilter.maxumur) {
      urlParams.set("maxumur", umurFilter.maxumur);
    }

    if (tinggiFilter.mintinggi) {
      urlParams.set("mintinggi", tinggiFilter.mintinggi);
    }

    if (tinggiFilter.maxtinggi) {
      urlParams.set("maxtinggi", tinggiFilter.maxtinggi);
    }

    if (beratFilter.minberat) {
      urlParams.set("minberat", beratFilter.minberat);
    }

    if (beratFilter.maxberat) {
      urlParams.set("maxberat", beratFilter.maxberat);
    }

    getAtlet();

    // Update the browser history with the new URL
    navigate(`/?${urlParams.toString()}`);
  };

  return (
    <div>
      

      <Link to="/add">
        <button
          type="submit"
          className="w-full mb-5 py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
        >
          Add Atlet
        </button>
      </Link>
      {/* <h1>{medaliFilter.length}</h1> */}
      <form onSubmit={handleSubmit}>
        {/* Filter Medal */}
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
          Medali
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="emas-checkbox"
                type="checkbox"
                name="medali"
                value="emas"
                checked={medaliFilter.includes("emas")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                for="emas-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Emas
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="perak-checkbox"
                type="checkbox"
                name="medali"
                value="perak"
                checked={medaliFilter.includes("perak")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                for="perak-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Perak
              </label>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="perunggu-checkbox"
                name="medali"
                type="checkbox"
                value="perunggu"
                checked={medaliFilter.includes("perunggu")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                for="perunggu-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Perunggu
              </label>
            </div>
          </li>
        </ul>

        {/* Filter Age */}
        <h3 className="mb-2 mt-5 font-semibold text-gray-900 dark:text-white">
          Umur
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Minimal umur"
                className="p-2"
                value={umurFilter.minumur}
                onChange={(e) =>
                  setUmurFilter({ ...umurFilter, minumur: e.target.value })
                }
              />
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Maximal umur"
                className="p-2"
                value={umurFilter.maxumur}
                onChange={(e) =>
                  setUmurFilter({ ...umurFilter, maxumur: e.target.value })
                }
              />
            </div>
          </li>
        </ul>

        {/* Filter Height */}
        <h3 className="mb-2 mt-5 font-semibold text-gray-900 dark:text-white">
          Tinggi
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Minimal tinggi"
                className="p-2"
                value={tinggiFilter.mintinggi}
                onChange={(e) =>
                  settinggiFilter({
                    ...tinggiFilter,
                    mintinggi: e.target.value,
                  })
                }
              />
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Maximal tinggi"
                className="p-2"
                value={tinggiFilter.maxtinggi}
                onChange={(e) =>
                  settinggiFilter({
                    ...tinggiFilter,
                    maxtinggi: e.target.value,
                  })
                }
              />
            </div>
          </li>
        </ul>

        {/* Filter Weight */}
        <h3 className="mb-2 mt-5 font-semibold text-gray-900 dark:text-white">
          Berat
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Minimal berat"
                className="p-2"
                value={beratFilter.minberat}
                onChange={(e) =>
                  setberatFilter({
                    ...beratFilter,
                    minberat: e.target.value,
                  })
                }
              />
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="text"
                placeholder="Maximal berat"
                className="p-2"
                value={beratFilter.maxberat}
                onChange={(e) =>
                  setberatFilter({
                    ...beratFilter,
                    maxberat: e.target.value,
                  })
                }
              />
            </div>
          </li>
        </ul>

        {/* Filter Gender */}
        <h3 className="mb-2 mt-5 font-semibold text-gray-900 dark:text-white">
          Jenis Kelamin
        </h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="l-checkbox"
                name="jk"
                type="checkbox"
                value="L"
                checked={jenisKelaminFilter === "L"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                for="l-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Laki-Laki
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="l-checkbox"
                name="jk"
                type="checkbox"
                value="P"
                checked={jenisKelaminFilter === "P"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleCheckboxChange}
              />
              <label
                for="p-checkbox"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Perempuan
              </label>
            </div>
          </li>
        </ul>

        <button
          type="submit"
          className="w-full mt-5 py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default MedaliCheckbox;
