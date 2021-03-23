const express = require('express');
const router = express.Router();

const {
  getMembers,
  postMember,
  showMember,
  updateMember,
  deleteMember,
} = require('../controller/memberController');

router.get('/', getMembers);
router.post('/post-member', postMember);
router.get('/:id', showMember);
router.put('/update/:id', updateMember);
router.delete('/delete/:id', deleteMember);

module.exports = router;
