const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, sort } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    // queryObject.sort = sortFix;
    apiData=apiData.sort(sortFix);
  }
  console.log(queryObject);

  const myData = await apiData.sort(sort);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).sort("-name");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
