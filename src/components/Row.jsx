import SingleSelectDropdown from './SingleSelectDropdown';
import MultiSelectDropdown from './MultiSelectDropdown';

const Row = ({ row, allRows, column1Options, column2Options, updateRow, deleteRow, ...dropdownProps }) => {
  const availableOptions = column1Options.filter(option => 
    option === row.label1 || !allRows.some(r => r.id !== row.id && r.label1 === option)
  );

  return (
    <tr className="hover:bg-gray-50 animate-fade-in">
      {/* Label 1 Column */}
      <td className="p-3 border-b border-gray-100 border-r-2">
        <SingleSelectDropdown
          options={availableOptions}
          selected={row.label1}
          onSelect={value => updateRow(row.id, { label1: value })}
        />
      </td>

      {/* Label 2 Column */}
      <td className="p-3 border-b border-gray-100 border-r-2">
        <MultiSelectDropdown
          options={column2Options}
          selected={row.label2}
          onSelect={values => updateRow(row.id, { label2: values })}
          {...dropdownProps}
        />
      </td>

      {/* Delete Button Column */}
      <td className="p-3 border-b border-gray-100 text-center">
        <button
          onClick={() => deleteRow(row.id)}
          className="cursor-pointer text-red-600 hover:text-red-800 transition-colors font-bold text-lg"
          aria-label="Delete row"
        >
          ×
        </button>
      </td>
    </tr>
  );
};

export default Row;