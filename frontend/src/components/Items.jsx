import Item2 from "./Item";

function Items({ items, onBtnClick }) {
  return (
    <div className="w-full max-w-lg mx-auto mt-6 bg-white rounded-2xl shadow-md p-4">
      {items.length === 0 ? (
        <p className="text-center text-gray-500 italic">No to-dos yet ✨</p>
      ) : (
        items.map((item) => (
          <Item2
            key={item.id}
            id={item.id}
            todoDate={item.dueDate}
            todoName={item.name}
            onBtnClick={onBtnClick}
          />
        ))
      )}
    </div>
  );
}

export default Items;
