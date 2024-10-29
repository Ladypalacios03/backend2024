const{Router}=require('express');
const { getAll, getById, createUser, updateUser, deleteUser } = require('../controllers/users');

//anterior : const{getAll, getById}=require('../controllers/users');

const router=Router();

router.get('/',getAll);

router.get('/:id',getById);

//tarea
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports=router;