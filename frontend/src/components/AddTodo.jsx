import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ newItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const clickAdd = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    if (!todoName || !todoDate) return;

    newItem(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <form
      onSubmit={clickAdd}
      className="flex flex-col sm:flex-row items-stretch justify-center gap-3 p-4 bg-white shadow-md rounded-2xl w-full max-w-lg mx-auto mt-6"
    >
      <input
        type="text"
        ref={todoNameElement}
        placeholder="Enter To-do Here"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="date"
        ref={todoDateElement}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg transition-all duration-200"
      >
        <BiMessageAdd size={22} />
      </button>
    </form>
  );
}

export default AddTodo;
