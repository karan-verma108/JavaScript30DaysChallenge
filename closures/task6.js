// 6) Use closures to create a simple module for managing a collection of items. Implement methods of add, remove and list items

const simpleModule = () => {
  const itemArr = [];
  const addItem = (item) => {
    itemArr.push(item);
    console.log(`Item ${item} has been added to the list ${itemArr}`);
  };

  const removeItem = (item) => {
    const itemIndex = itemArr.indexOf(item);
    itemArr.splice(itemIndex, 1);
    console.log(`Item ${item} has been removed to the list ${itemArr}`);
  };

  const showAllItems = () => {
    if (itemArr.length === 0) {
      console.log('There are no items in the list');
    } else {
      console.log('Total number of items in the list are : ');
      itemArr.map((item) => console.log(item));
    }
  };

  return { addItem, removeItem, showAllItems };
};

const moduleInstance = simpleModule();
moduleInstance.addItem('raja');
moduleInstance.addItem('bhalu');
moduleInstance.addItem('john');
moduleInstance.addItem('cena');
moduleInstance.removeItem('cena')
moduleInstance.showAllItems();
