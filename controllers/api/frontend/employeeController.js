var employeeModel = require('../../../models/employeeModel')
var employeeRepository = require('../../../Repositories/frontend/employeeRepository')

/* GET  list  */
exports.index = async(req,res,next)=>{
    let response = {}
    data = await employeeRepository.get(); 
    response.data = data.data
    response.msg = 'Successfully fetched!'
    response.status = 200
    res.send(response) 
}

/* fetch the data for creating  record page */
exports.create = (req,res,next)=>{
    let response = {}

    response.status = 200
    response.data = null
    response.msg = 'Successfully fetched!'
    res.send(response) 
} 

/* Create a new record */
exports.store = async (req,res,next)=>{
    let response = {}

    

    
    let input = {}
    input.data = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary,
    }
    data = await employeeRepository.createNew(input); 

    response.data = data.data
    response.msg = 'Successfully Created!'
    response.status = 200
    
    res.send(response) 
}

/* fetch the data for editing  record page */
exports.edit = async(req,res,next)=>{
    
    let response={}
    let id = req.params.id;
    data = await employeeRepository.getById(id); 

    response.data = data.data
    response.msg = 'Successfully fetched!'
    response.status = 200
    res.send(response)

 } 

 /* Update the record */
exports.update = async(req,res,next)=>{
    let response={}

    let id = req.params.id;
    let query = {'_id':id};
    let update = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary,
    }

    let input = {
        id : id, 
        update : update
    }

    data = await employeeRepository.update(input); 

    response.data = data.data
    response.msg = 'Successfully updated!'
    response.status = 200

    res.send(response)
}

/* Delete the record */
exports.destroy = async (req,res,next)=> {
    let response = {}
    var id = req.params.id;

    data = await employeeRepository.destroy(id); 

    response.data = data.data
    response.msg = 'Successfully deleted!'
    response.status = 200
    
    return res.send(response)
}