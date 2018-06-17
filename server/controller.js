module.exports = {
  getProducts: (req, res) => {
    let db = req.app.get("db");
    db.get_items().then(products => {
      //   console.log(products);
      res.status(200).send(products);
    });
  },

  addProduct: (req, res) => {
    let db = req.app.get("db");
    let { name, price, image_url } = req.body;
    db.add_item([name, price, image_url]).then(() =>
      //   console.log(req.body);
      res.sendStatus(200)
    );
  }
};
