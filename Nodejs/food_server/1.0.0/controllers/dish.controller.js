const Dish = require("../models/dish.model");
// const bcrypt = require("bcryptjs");
const _ = require("lodash");
const Count = require("../models/counter.model");

class DishCtrl 
{
  static create(req, res) {

    console.log("req.file: ", req.file);
    console.log("req.body: ", req.body);
    console.log("req.file:", req.file);
    
    // get data from requests
    const dishData = req.body;
    dishData.image = "images/" + req.file.filename;

    //create model object
    console.log("before inserted:", dishData);
    
    Count.findOne({ type: "dish" }, (err, result) => {
      if (err || !result) {
        console.log(err)
        res
          .status(500)
          .send({ message: "Could not inserted. Try again ", error: err });
      } else {
        dishData.id = result.count + 1;
        // create model Object
        const dish = new Dish(dishData);
        // save data to db

        dish
          .save()
          .then(result => {
            // user created succesfully'
            res.status(200).send({
              message: "dish created succesfully",
              data: _.pick(dish, [
                "_id",
                "id",
                "title",
                "type",
                "price",
                "dprice",
                "status",
                "description",
                "quantity",
                "image"
              ])
            });
          })
          .catch(err => {
            // error occured while inserting user details

            res.status(500).send({
              message: "Could not create dish. Please try again",
              error: err
            });
          });
      }
    });
  }

  static update(req, res)
  {
    const id = req.params.id;
    const doc = req.body;

    Dish.findOneAndUpdate({ id: id }, doc, { new: true }, (err, result) => {
      if(err || !result)
      {
        res
        .status(404)
        .send({ message: "Could not updated. Please try again", error: err });
      }
      else
      {
        console.log(result);

        res.status(200).send({
          message: "Dish Updated Successfully",
          data: _.pick(result, ["_id", "id", "title", "type", "price", "dprice", "status", "description", "quantity", "image"])
        })
      } // else
    }) // findOneAndUpdate()
  } // update()

  static delete(req, res) 
  {
    const id = req.params.id;

    Dish.findOneAndDelete({ id: id }, (err, result) => {
      if(err || !result)
      {
        res
        .status(404)
        .send({ message: "Could not deleted. Please try again", error: err });
      }
      else
      {
        console.log(result);

        res.status(200).send({
          message: "Dish Deleted Successfully",
          data: _.pick(result, ["_id", "id", "title", "type", "price", "dprice", "status", "description", "quantity", "image"])
        })
      } // else
    }) // findOneAndUpdat
  }

  static getUser(req, res)
  {
    const param = req.params.id;
    const id = isNaN(param) ? 0 : parseInt(param);
    // console.log("id",id);

    Dish.findOne(
      { $or: [{ id: id }, { title: param }, { type: param }] },
      (err, result) => {
        if (err || !result) {
          res.status(404).send({ message: "Dish not available", error: err });
        } else {
          res.status(200).send({
            message: "Dish details",
            data: _.pick(result, [
              "_id",
              "id",
              "title",
              "type",
              "price",
              "dprice",
              "status",
              "description",
              "quantity",
              "image"
            ])
          });
        }
      }
    );
  }

  static getDishes(req, res) {
    Dish.find({}, (err, result) => {
      if (err || !result) {
        res.status(404).send({ message: "Dish not available", error: err });
      } else {
        const updateList = _.map(result, function(dish) {
          return _.pick(dish, [
            "_id",
            "id",
            "title",
            "type",
            "price",
            "dprice",
            "status",
            "description",
            "quantity",
            "image"
          ]);
        });
        res.status(200).send({ message: "Dish List", data: updateList });
      }
    });
  }

  static authenticate(req, res)
  {
    const { email, password } = req.body;

    User.findOne({ email: email }, (err, result) => {
      if(err || !result)
      {
        res.status(404).send({ message: "Invalid Email", error: err });
      }
      else
      {
        bcrypt.compare(password, result.password)
              .then(data => {
                if(data)
                  res
                    .status(200)
                    .send({ message: "Login successful", data: data });
                else
                  res
                    .status(404)
                    .send({ message: "Invalid Password", error: "not matched" });
              })
              .catch(err => {
                res
                    .status(404)
                    .send({ message: "Invalid password", error: err });
              })
      }
    })
  } // authenticate()

} // class end

module.exports = DishCtrl;
