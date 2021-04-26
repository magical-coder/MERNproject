const Category = require("../models/category")

exports.getCategoryById = (req, res, next, id) => {

        Category.findById(id).exec((err, cate) => {
            if(err)
            {
                return res.status(400).json({
                    error: "Category not found in DB"
                }); 
            }
            req.category = cate;
            next();
        })
};

exports.createCategory = (req,res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if(err)
        {
            return res.status(400).json({
                error: "not able to save category"
            });
        }
        res.json({category});
    })
}

exports.getCategory = (req, res) => {
    return res.json(req.category);
}
exports.getAllCategory = (req, res) => {
    Category.find().exec((err,items) => {
        if(err)
        {
            return res.status(400).json({
                error: "not able to get all category"
            });
        }
        res.json({items});
    })
}