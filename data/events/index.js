'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getProduct = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const getList = await pool.request().query(sqlQueries.get);
        return getList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const createChart = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const getList = await pool.request().query(sqlQueries.createchart);
        return getList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const creatProduct = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertProduct = await pool.request()
                            .input("employeeID", sql.Int, eventdata.employeeID)
                            .input("employeeName", sql.NVarChar(500), eventdata.employeeName)
                            .input("Department", sql.NVarChar(200), eventdata.Department)
                            .input("Location", sql.NVarChar(500), eventdata.Location)
                            .query(sqlQueries.create);                            
        return insertProduct.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getProduct,
    createChart,
    creatProduct
}