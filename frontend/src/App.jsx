import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState, useEffect } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
} from "./Services/itemsService";

function App() {
  const [currentitems, setNewItems] = useState([]);

  const loadInitialItems = async () => {
    const items = await getItemsFromServer();
    setNewItems(items);
  };

  useEffect(() => {
    loadInitialItems();
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    try {
      const newItem = await addItemToServer(itemName, itemDueDate);
      setNewItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      alert("Something went wrong while adding the item.");
      console.error(error);
    }
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = currentitems.filter((item) => item.id !== deletedId);
    setNewItems(newTodoItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-start p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 mt-10">
        <AppName />
        <AddTodo newItem={handleNewItem} />
        {currentitems.length > 0 ? (
          <Items items={currentitems} onBtnClick={handleDeleteItem} />
        ) : (
          <WelcomeMessage />
        )}
      </div>
    </div>
  );
}

export default App;
