import { MdDelete } from "react-icons/md";

function Item2({ id, todoName, todoDate, onBtnClick }) {
  const formattedDate = new Date(todoDate).toISOString().split("T")[0];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 mb-3 hover:shadow-md transition-all duration-200">
      {/* To-Do Name */}
      <div className="flex-1 text-gray-800 font-medium text-center sm:text-left break-words">
        {todoName}
      </div>

      {/* Date + Delete Button */}
      <div className="flex items-center mt-2 sm:mt-0">
        <span className="text-gray-500 text-sm sm:text-base mr-6">
          {formattedDate}
        </span>
        <button
          onClick={() => onBtnClick(id)}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-lg p-2 transition-all duration-200"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
}

export default Item2;
