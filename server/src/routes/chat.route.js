const { Router } = require('express');
const ChatController = require('../controllers/chat.controller');
const { verifyToken } = require('../middlewares/auth');
const router = Router();
router.post('/', verifyToken, ChatController.accessChat);
router.get('/', verifyToken, ChatController.fetchChats);
router.post('/group', verifyToken, ChatController.createGroupChat);
router.put('/rename', verifyToken, ChatController.renameGroup);
router.put('/remove-from-group', ChatController.removeFromGroup);
router.put('/add-to-group', verifyToken, ChatController.addToGroup);
router.delete('/remove-group-chat/:id', verifyToken, ChatController.removeGroupChat);
module.exports = router;
