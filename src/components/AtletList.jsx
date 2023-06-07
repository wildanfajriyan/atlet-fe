import { Link } from "react-router-dom";
import MedaliCheckbox from "./MedaliCheckbox";

const AtletList = ({ setAtlet, getAtlet, atlet }) => {
  return (
    <>
      <div>
        <MedaliCheckbox setAtlet={setAtlet} getAtlet={getAtlet} />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Kelamin
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Umur
              </th>
              <th scope="col" className="px-6 py-3">
                Tinggi
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Berat
              </th>
              <th scope="col" className="px-6 py-3">
                Olahraga
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Event
              </th>
              <th scope="col" className="px-6 py-3">
                Medali
              </th>
            </tr>
          </thead>
          <tbody>
            {atlet.map((a) => {
              return (
                <>
                  <tr
                    className="border-b border-gray-200 dark:border-gray-700"
                    key={a.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {a.nama}
                    </th>
                    <td className="px-6 py-4">{a.jenisKelamin}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {a.umur}
                    </td>
                    <td className="px-6 py-4">{a.tinggi}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {a.berat}
                    </td>
                    <td className="px-6 py-4">{a.olahraga}</td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {a.event}
                    </td>
                    <td className="px-6 py-4">{a.medali}</td>

                    <td class="px-6 py-4">
                      <Link
                        to={`/edit/${a.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AtletList;
