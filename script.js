const data = require(`./data`);

const countCompletedTodos = (todosArr) => {
  //   let completedTodosCounter = 0;
  /*   for (let i = 0; i < todosArr.length; i++) {
    if (todosArr[i].completed === true) {
      completedTodosCounter++;
      //   console.log(completedTodosCounter);
    }
  } */

  /*   todosArr.forEach((todo) => {
    if (todo.completed === true) {
      completedTodosCounter++;
    }
  }); */

  //   todosArr.forEach((todo) => (todo.completed ? completedTodosCounter++ : null));

  return todosArr.filter((todo) => todo.completed === true).length;

  //   return completedTodosCounter;
};

// console.log(countCompletedTodos(data));

const collectUniqueUserIds = (todosArr) => {
  const uniqueIds = [];

  todosArr.forEach((todo) =>
    !uniqueIds.includes(todo.userId) ? uniqueIds.push(todo.userId) : null
  );

  /*   for (let i = 0; i < todosArr.length; i++) {
    const newUserId = todosArr[i].userId;

    if (uniqueIds.includes(newUserId) === false) {
      uniqueIds.push(newUserId);
    } */

  /*     for (let j = 0; j < uniqueIds.length; j++) {
      const currentUserId = uniqueIds[j];

      if (newUserId === currentUserId) {
        // uniqueIds.push(newUserId);
        break;
      }
      if (j === uniqueIds.length - 1) {
        uniqueIds.push(newUserId);
        break;
      }
    } */

  return uniqueIds.sort((a, b) => a - b);
};

console.log(collectUniqueUserIds(data));
