const objoracle = require('oracledb');

connect = {
    user: "",
    password: "",
    connectString: ""
}

function openConection(sql, binds, dml, res) {
    objoracle.getConnection(connect, (error, conn) => {
        if (error) return;
        conn.execute(sql, binds, dml, () => {
        })
    })
}

function closeConection(conn) {
    conn.release((error) => {

    })
}

exports.openConection = openConection;
exports.closeConection = closeConection;
