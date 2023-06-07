import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAtlet = () => {
  const [atletId, setAtletId] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAtletById();
  }, [id]);

  const getAtletById = () => {
    fetch(`http://localhost:5000/atlet/${id}`)
      .then((res) => res.json())
      .then((data) => setAtletId(data));
  };

  const updateAtlet = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/atlet/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(atletId),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    navigate("/");
  };

  return (
    <>
      <div style={{ margin: "auto" }}>
        <form onSubmit={updateAtlet}>
          <div class="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setAtletId({ ...atletId, nama: e.target.value })}
              value={atletId.nama}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, jenisKelamin: e.target.value })
              }
              value={atletId.jenisKelamin}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Umur
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setAtletId({ ...atletId, umur: e.target.value })}
              value={atletId.umur}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tinggi
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, tinggi: e.target.value })
              }
              value={atletId.tinggi}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Berat
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, berat: e.target.value })
              }
              value={atletId.berat}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Olahraga
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, olahraga: e.target.value })
              }
              value={atletId.olahraga}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, event: e.target.value })
              }
              value={atletId.event}
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Medali
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                setAtletId({ ...atletId, medali: e.target.value })
              }
              value={atletId.medali}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditAtlet;
