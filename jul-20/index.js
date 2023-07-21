var contactApp = [];
var nextId = 1;

function create() {
  console.log("Insertion of records");
  let toDoItem = prompt("Enter ToDo Item");

  let obj = {
    id: nextId++,
    toDoItem: toDoItem,
    Status: "not completed",
  };

  contactApp.push(obj);
  console.log("ToDo Item added successfully!");
  console.log(contactApp);
}

function update() {
  console.log("Updation of records");
  let idToUpdate = parseInt(
    prompt("Enter the ID of the ToDo Item you want to update")
  );
  const existingIndex = contactApp.findIndex(
    (contact) => contact.id === idToUpdate
  );

  if (existingIndex !== -1) {
    let newStatus = prompt(
      "Do you really want to update status to Completed? (yes/no)"
    ).toLowerCase();

    if (newStatus === "yes") {
      contactApp[existingIndex].Status = "completed";
      console.log("Status updated to Completed successfully!");
      contactApp.forEach((element) =>
        console.log(element.id, element.toDoItem, element.Status)
      );
    } else {
      console.log("Status update operation cancelled.");
    }
  } else {
    console.log("ToDo Item with the provided ID does not exist");
  }
}

function read() {
  console.log("Reading records");

  const completedItems = contactApp.filter(
    (item) => item.Status === "completed"
  );
  const notCompletedItems = contactApp.filter(
    (item) => item.Status !== "completed"
  );

  console.log("Completed Items:");
  completedItems.forEach((element) =>
    console.log(element.id, element.toDoItem, element.Status)
  );

  console.log("Not Completed Items:");
  notCompletedItems.forEach((element) =>
    console.log(element.id, element.toDoItem, element.Status)
  );
}

function deleteRec() {
  console.log("Deletion of records");
  let idToDelete = parseInt(
    prompt("Enter the ID of the ToDo Item you want to delete")
  );
  const existingIndex = contactApp.findIndex(
    (contact) => contact.id === idToDelete
  );

  if (existingIndex !== -1) {
    contactApp.splice(existingIndex, 1);
    console.log("ToDo Item deleted successfully!");
  } else {
    console.log("ToDo Item with the provided ID does not exist");
  }
}

function deleteAll() {
  console.log("Deletion of all records");
  contactApp = [];
  console.log("All ToDo Items deleted successfully!");
}

function main() {
  while (true) {
    console.log("Available Choices:");
    console.log("1: Create a new ToDo Item");
    console.log("2: Update an existing ToDo Item");
    console.log("3: Read all ToDo Items");
    console.log("4: Delete a ToDo Item by ID");
    console.log("5: Delete all ToDo Items");
    console.log("0: Exit");
    let choice = Number.parseInt(prompt("Enter the Choice"));
    switch (choice) {
      case 1:
        create();
        break;
      case 2:
        update();
        break;
      case 3:
        read();
        break;
      case 4:
        deleteRec();
        break;
      case 5:
        deleteAll();
        break;
      default:
        console.log("Invalid");
    }
  }
}

main();
