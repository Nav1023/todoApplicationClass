let todoList = [
  {
    id:'1',
    taskName: 'Learn Nodejs',
    description: 'Pay attention in the classes to understand the things',
    completedStatus: false,
    deadline: '30/08/2021',
    priority: '1'
  },
  {
    id:'2',
    taskName: 'Learn Reactjs',
    description: 'Pay attention in the classes to understand the things',
    completedStatus: false,
    deadline: '30/08/2021',
    priority: '2'
  }
];

const todoController = {
  create: (req, res) => {
    const { body } = req;
    todoList.push(body);
    res.send({
      message: 'Added successfully',
      status: true,
    });
  },
  update: (req, res) => {
    console.log('Hello from todo update controller');
    const { body } = req;
    const { id } = req.params;

    // const { id, ...rest } = body;

    // console.log('values', id, rest);

    for(let i=0; i<todoList.length; i++){
      if(todoList[i].id == id){
        todoList[i] = { ...todoList[i], ...body};
        console.log('todolist', todoList[i]);
      }
    }
    res.send({
      message: 'Updated successfully',
      status: true,
      todoList,
    }); 
  },
  delete:  (req, res) => {
    const { body } = req;
    const { id } = req.params;

    for(let i=0; i<todoList.length; i++){
      if(todoList[i].id == id){
         todoList.splice(i, 1);
      }
    }
    res.send({
      message: 'Updated successfully',
      status: true,
      todoList,
    }); 
  },
  fetchList: (req, res) => {
    res.send(todoList);
  },
  fetchTask: (req, res) => {
    const { id } = req.params;
    let matchedElement = {};
    todoList.forEach(element => {
      if(element.id == id){
        matchedElement = element;
      }
    });
    return res.send({
      status: true,
      data: matchedElement
    });
  },
  changeStatus: (req, res) => {
    const { body } = req;
    const { id } = req.params;
    
    for(let i=0; i<todoList.length; i++){
      if(todoList[i].id == id){
        todoList[i].completedStatus = body.completedStatus;
      }
    }
    res.send({
      message: 'Marked the status successfully',
      status: true,
      todoList,
    }); 
  }
}

module.exports = todoController;




// old wherever you find 3 remove it
// [1, 2, 3, 4, 3, 6]
// new
// [1, 2, 4, 6]

// if (arr[i] == 3){
//   arr[i] = 9;
// // }
// {
//     id:'2',
//     "taskName": "Learn Full Stack development",
//     "description": "Pay attention in the classes to understand the things",
//     "status": false,
//     "deadline": "30/08/2021",
//     "priority": 4,
// }

