const CustomError = require("../utils/custom-error");
const categoryQuery = require("../queries/category.query");
const categoryValidation = require("../validations/category.validation");

const create_category = async(req, res) => {
    const {category_name} = req.body;

    const result = await categoryValidation.create({category_name});
    if(result.error) throw new CustomError(result.error.message, 400);

    const data = await categoryQuery.create(category_name);

    res.status(201).json({message: "Success", created_date: data});
};

const get_category = async(req, res, next) => {
    try {
        const categoryes = await categoryQuery.find();

        res.json({message: "Success", data: categoryes});
    } catch (error) {
        next(error);
    }
};

const getOne_category = async(req, res, next) => {
    try {
        const {id} = req.params;
        const categoryes = await categoryQuery.find_one(id);

        res.json({message: "Success", data: categoryes});
    } catch (error) {
        next(error);
    }
};

const update_category = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {category_name} = req.body;

        const data = await categoryQuery.update(category_name, id);

        res.status(203).json({message: "Success", update_data: data});
    } catch (error) {
        next.error();
    }
};

const delete_category = async(req, res, next) => {
    try {
        const {id} = req.params;

        const data = await categoryQuery.remove(id);

        res.status(200).json({message: "Success", remove_contact: data});
    } catch (error) {
        next(error);
    }
};

module.exports = {create_category, getOne_category, get_category, update_category, delete_category};