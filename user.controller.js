const bcrypt = require('bcryptjs');
const _ = require('lodash');
const User = require('../models/user.model');
const Counter = require('../models/counter.model');
class UserCtrl 
{ 
  static create(req, res)
  {
    // get data from request
    const userData = req.body;

    // create model object
    const salt = bcrypt.genSaltSync(10);
    const  
  }

  Counter.findOne({ type: "user" }, (err, result) => {
    if(err || !result)
    {
      res.status(500).send({ message: "Could not inserted. Try again", error: err });
    }
    else
    {
      userData.id = result.count + 1;
      console.log("Result", result);

      const user = new User(userData); 

      user.save()
          .then(result => {
            // user created successfully
            Counter.findOneAndUpdate({ type: "user" }, { count: userData.id }, (err, result ) => {
                console.log(err);
                console.log("user counter incremented", result);
            });
          res
              .status(200)
              .send({ message: "User created successfully", data: result });
    })
  .catch(err => {
    // error occured while inserting user details
    res
        .status(500)
        .send({ message: })
  })
  })

  static getUser(req, res)
  {
    const param = req.params.id;
    const id = isNaN(param) ? 0 : parseInt(param);
    
    User.findOne({ $or: [{ "id": id }, { "email": id }, { "mobile": id }] }, (err, result) => {

      if(err || !result)
      {
        res.status(404).send({ message: "User not available", error: err });
      }
      else
      {
        res
            .status(200)
            .send({
              message: "User details",
              data: _.pick(result, ["_id", "id", "name", "email", "mobile", "status"])
            });
      }
    })
  }

  static getUsers(req, res)
  {
    User.find({}, (err, result) => {
      if(err || !result)
      {
        res.result(404).send({ message: "Users not available", error: err });
      }
      else
      {
        const updatedList = _.map(result, function (user) {
          return _.pick(user, ["_id", "id", "name", "email", "mobile", "status"]);
        })

        res.status(200).send({message: "User List", data: updatedList });
      }
    })
  }

}