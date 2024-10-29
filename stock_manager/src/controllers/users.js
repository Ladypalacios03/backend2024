const{request, response}=require('express');

const users=[
    {id: 1, name: 'lady'},
    {id: 2, name: 'Sthefany'},
    {id: 3, name: 'Agustin'},
];

const getAll=(req=request, res=response)=>{
    res.send(users);
}

const getById=(req=request, res=response)=>{
    const {id}=req.params;

    if(isNaN(id)){
        res.status(400).send('Invalid ID');
        return;
      }

      const user  = users.find(user => user.id === +id); 

      if(!user){
        res.status(404).send('User not found');
        return;
      }

      res.send(user);

}

// TAREA
// Crear un nuevo usuario
const createUser = (req = request, res = response) => {
  const { name } = req.body;

  if (!name) {
      res.status(400).send('Name is required');
      return;
  }

  const newUser = {
      id: users.length + 1,
      name
  };

  users.push(newUser);
  res.status(201).send('El usuario se creo correctamente');
};

// Actualizar un usuario por ID
const updateUser = (req = request, res = response) => {
  const { id } = req.params;
  const { name } = req.body;

  if (isNaN(id)) {
      res.status(400).send('Invalid ID');
      return;
  }

  const user = users.find(user => user.id === +id);

  if (!user) {
      res.status(404).send('User not found');
      return;
  }

  if (!name) {
      res.status(400).send('Name is required');
      return;
  }

  user.name = name;
  res.send('El usuario se actualizo');
};

// Eliminar un usuario por ID
const deleteUser = (req = request, res = response) => {
  const { id } = req.params;

  if (isNaN(id)) {
      res.status(400).send('Invalid ID');
      return;
  }

  const index = users.findIndex(user => user.id === +id);

  if (index === -1) {
      res.status(404).send('User not found');
      return;
  }

  users.splice(index, 1);
  res.status(204).send('El usuario se elimino');
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };

//anterior: module.exports={getAll, getById};