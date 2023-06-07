import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAtlet = () => {
  const [newAtlet, setNewAtlet] = useState({
    nama: "",
    jenisKelamin: "",
    umur: 0,
    tinggi: 0,
    berat: 0,
    olahraga: "",
    event: "",
    medali: "",
  });

  const navigate = useNavigate();

  const saveAtlet = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/atlet", {
        method: "POST",
        body: JSON.stringify(newAtlet),
        headers: {
          "Content-type": "application/json",
        },
      });

      // let result = await res.json();

      if (res.status === 200) {
        setNewAtlet({
          nama: "",
          jenisKelamin: "",
          umur: 0,
          tinggi: 0,
          berat: 0,
          olahraga: "",
          event: "",
          medali: "",
        });
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ margin: "auto" }}>
        <form onSubmit={saveAtlet}>
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
              value={newAtlet.nama}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, nama: e.target.value })
              }
            />
          </div>

          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jenis Kelamin (L/P)
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newAtlet.jenisKelamin}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, jenisKelamin: e.target.value })
              }
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
              type="number"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newAtlet.umur}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, umur: e.target.value })
              }
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
              type="number"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newAtlet.tinggi}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, tinggi: e.target.value })
              }
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
              type="number"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newAtlet.berat}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, berat: e.target.value })
              }
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
              value={newAtlet.olahraga}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, olahraga: e.target.value })
              }
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
              value={newAtlet.event}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, event: e.target.value })
              }
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
              value={newAtlet.medali}
              onChange={(e) =>
                setNewAtlet({ ...newAtlet, medali: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddAtlet;
