export const addItemToServer = async (task,date) => {
  const response = await fetch("http://localhost:18/api/todo",{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    
    body: JSON.stringify({task,date}),
  });
  const item = await response.json();
  return mapServeItemToLocalItem(item);
}

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:18/api/todo");
  const items = await response.json();
  return items.map(mapServeItemToLocalItem);
}

export const updateItemOnServer = async (id) => { const response = await fetch (`http://localhost:18/api/todo/${id}/completed`,{
  method:"PUT",
});
const item = await response.json();
return mapServeItemToLocalItem(item);
}

export const deleteItemFromServer = async (id) => {
const response = await fetch(`http://localhost:18/api/todo/${id}`,{
    method: "DELETE",
  });
  const item = await response.json();
  return item._id;
}




const mapServeItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    complete: serverItem.complete,
    createdAt: serverItem.createdAt,
    updateAt: serverItem.updateAt,

  }
}