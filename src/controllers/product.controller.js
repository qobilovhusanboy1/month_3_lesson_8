const jwt = require("../utils/jwt")
const CustomError = require("../utils/custom-error");
const productQuery = require("../queries/product.query");
const historyQuery = require("../queries/histore.query");
const productValidation = require("../validations/product.validation");

const create_product = async (req, res, next) => {
    try {
        const {product_name, kg, price, category_id, is_sell} = req.body;
        
        const result = await productValidation.create({product_name, kg, price, category_id});
        if (result.error) throw new CustomError(result.error.message, 400);
          
        if(is_sell == true){
            const data = await productQuery.chesk_product(product_name, category_id);
            if(data){
                const result = await productQuery.product_plus(product_name, category_id, kg, price);
                
                res.status(201).json({message: "Success", result});

                await historyQuery.create(req.id.id, data.id, true, kg, price)
                return;
            }else{
                const result = await productQuery.create(product_name, kg, price, category_id);

                res.status(201).json({message: "Success", result});

                const data = await historyQuery.create(req.id.id, result.id, true, kg, price);
                console.log(data);
                return;
            }
        }else{
            const data = await productQuery.product_minus(product_name, category_id, kg, price);

            res.status(201).json({message: "Success", data});

            await historyQuery.create(req.id.id, data.id, false, kg, price);
            return;
        }
    } catch (error) {
        next(error);
    }
};

const get_product = async (req, res, next) => {
    try {
        const products = await productQuery.find();

        res.json({message: "Success", data: products});
    } catch (error) {
        next(error);
    }
};

const get_one_product = async (req, res, next) => {
    try {
        const {id} = req.params;
        const product = await productQuery.find_one(id);

        res.json({message: "Success", data: product});
    } catch (error) {
        next(error);
    }
};

const delete_product = async (req, res, next) => {
    try {
        const {id} = req.params;

        const data = await productQuery.remove(id);

        res.status(200).json({message: "Success", remove_contact: data});
    } catch (error) {
        next(error);
    }
};

module.exports = {create_product, get_product, get_one_product, delete_product};