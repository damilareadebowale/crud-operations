const Member = require('../model/memberModel');

const getMembers = (req, res, next) => {
  Member.find()
    .then((members) => res.status(200).json(members))
    .catch((err) => res.status(400).json('Error getting members'));
};

const postMember = (req, res, next) => {
  const { firstName, lastName, phone, organization } = req.body;

  const member = { firstName, lastName, phone, organization };

  Member.create(member)
    .then(() =>
      res.status(200).json({ message: 'Member created successfully' })
    )
    .catch((err) =>
      res.status(400).json({ message: 'Error creating a member' })
    );
};

const showMember = (req, res, next) => {
  Member.findById(req.params.id)
    .then((member) => res.status(200).json(member))
    .catch((err) => res.status(400).json('Error getting the member'));
};

const updateMember = (req, res, next) => {
  Member.findById(req.params.id).then((member) => {
    member.firstName = req.body.firstName;
    member.lastName = req.body.lastName;
    member.phone = req.body.phone;
    member.organization = req.body.organization;
    member
      .save()
      .then(() => res.status(200).json('Member Updated'))
      .catch((err) => res.status(400).json('Error getting member' + err));
  });
};

const deleteMember = (req, res, next) => {
  Member.findOneAndRemove(req.params.id)
    .then(() => res.status(200).json('Member Deleted'))
    .catch((err) => res.status(400).json('Error deleting member' + err));
};

module.exports = {
  getMembers,
  postMember,
  showMember,
  updateMember,
  deleteMember,
};
