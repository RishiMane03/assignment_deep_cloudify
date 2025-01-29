import { useState, useEffect } from "react";
import Row from "./Row";

// Function to get initial data from local storage or set default values
const getInitialData = () => {
  const savedData = localStorage.getItem("tableData");
  return savedData
    ? JSON.parse(savedData)
    : {
        rows: [{ id: Date.now(), label1: null, label2: [] }],
        column1Options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        column2Options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      };
};

function Table() {
  const [data, setData] = useState(getInitialData());
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(data));
  }, [data]);

  const addRow = () => {
    const newRow = {
      id: Date.now(),
      label1: null,
      label2: [],
    };
    setData((prev) => ({
      ...prev,
      rows: [...prev.rows, newRow],
    }));
  };

  // Delete a specific row
  const deleteRow = (rowId) => {
    setData((prev) => ({
      ...prev,
      rows: prev.rows.filter((row) => row.id !== rowId),
    }));
  };

   // Delete all rows
  const deleteAllRows = () => {
    setData((prev) => ({
      ...prev,
      rows: [],
    }));
  };

  const updateRow = (rowId, updates) => {
    setData((prev) => ({
      ...prev,
      rows: prev.rows.map((row) =>
        row.id === rowId ? { ...row, ...updates } : row
      ),
    }));
  };

  const handleAddNewItem = () => {
    const trimmedItem = newItem.trim();
    if (!trimmedItem) {
      setError("Item cannot be empty!");
      return;
    }
    if (data.column2Options.includes(trimmedItem)) {
      setError("Item already exists!");
      return;
    }
    setData((prev) => ({
      ...prev,
      column2Options: [...prev.column2Options, trimmedItem],
    }));
    setNewItem("");
    setError("");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto h-screen">
      <h1 id="TableHeading" className="text-center mt-10 mb-5 text-6xl">Table</h1>

      {/* Display error message if any */}
      {error && (
        <div className="mb-2 p-2 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Table structure */}
      <table className="w-full border-collapse shadow-sm border-2 border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-center border-b-2 border-gray-200 border-r-2">
              Label 1
            </th>
            <th className="p-3 text-center border-b-2 border-gray-200 border-r-2">
              Label 2
            </th>
            <th className="p-3 border-b-2 border-gray-200 w-12"></th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <Row
              key={row.id}
              row={row}
              allRows={data.rows}
              column1Options={data.column1Options}
              column2Options={data.column2Options}
              updateRow={updateRow}
              deleteRow={deleteRow}
              newItem={newItem}
              setNewItem={setNewItem}
              error={error}
              setError={setError}
              handleAddNewItem={handleAddNewItem}
            />
          ))}
        </tbody>
      </table>

      {/* Buttons for adding and deleting rows */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={addRow}
          className="cursor-pointer px-4 py-2 bg-[#b8fb00] rounded-md transition-colors flex items-center gap-1 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform transition-transform duration-300 group-hover:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Row
        </button>

        <button
          onClick={deleteAllRows}
          className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Delete All Rows
        </button>
      </div>
    </div>
  );
}

export default Table;
