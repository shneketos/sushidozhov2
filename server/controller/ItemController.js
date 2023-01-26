import ItemModel from "../models/item.js";

export const getAll = async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "не удалось получить все предметы",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const itemId = req.params.id;
    const items = await ItemModel.findOne({ _id: itemId });
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "не удалось получить один предмет",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const itemId = req.params.id;

    ItemModel.findOneAndDelete(
      {
        _id: itemId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Не удалось удалить ",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Предмет не найден",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};
export const update = async (req, res) => {
  try {
    const itemId = req.params.id;

    await ItemModel.updateOne(
      { _id: itemId },
      {
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        desc: req.body.desc,
        category: req.body.category,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "не удалось обновить предмет",
    });
  }
};
export const create = async (req, res) => {
  try {
    const doc = new ItemModel({
      title: req.body.title,
      price: req.body.price,
      img: req.body.img,
      desc: req.body.desc,
      category: req.body.category,
    });

    const item = await doc.save();

    res.json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "не удалось создать предмет",
    });
  }
};
