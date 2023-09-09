const jwt = require("../utils/jwt")
const CustomError = require("../utils/custom-error");
const workerQuery = require("../queries/worker.query");
const workerValidation = require("../validations/worker.validation");

const chesk_worker = async (req, res) => {
    const {fullname, password} = req.body;

    const worker = await workerQuery.chesk_worker(fullname, password);

    if(!worker)
        return res.status(401).json({message: "Unauthorized"});

    const token = jwt.sign({id: worker.id});

    res.status(201).json({message: 'Success', token: token});
};

const create_worker = async (req, res) => {
    const {fullname, email, worker_password} = req.body;

    const result = await workerValidation.create({fullname, email, worker_password}) ;
    if(result.error) throw new CustomError(result.error.message, 400);    

    const data = await workerQuery.create(fullname, email, worker_password);

    res.status(201).json({message: "Success", create_worker: data});
};

const get_workers = async (req, res, next) => {
    try {
        const workers = await workerQuery.find();

        res.json({message: "Success", data: workers});
    } catch (error) {
        next(error);
    }
};

const get_one_worker = async (req, res, next) => {
    try {
        const {id} = req.params;
        const worker = await workerQuery.find_one(id);

        res.json({message: "Success", data: worker});
    } catch (error) {
        next(error);
    }
};

const update_one_worker = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {fullname, email, worker_password} = req.body;

        const data = await workerQuery.update(fullname, email, worker_password, id);

        res.status(203).json({message: "Success", update_data: data});
    } catch (error) {
        next.error();
    }
};

const delete_one_worker = async (req, res, next) => {
    try {
        const {id} = req.params;

        const data = await workerQuery.remove(id);

        res.status(200).json({message: "Success", remove_worker: data});
    } catch (error) {
        next(error);
    }
};

module.exports = {chesk_worker, create_worker, get_one_worker, get_workers, update_one_worker, delete_one_worker};