module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_items().then(products => {
      console.log(products);
      res.status(200).send(products);
    });
  }
};
