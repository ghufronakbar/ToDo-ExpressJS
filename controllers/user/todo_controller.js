"use strict";

const connection = require("../../connection");

exports.getTodos = async (req, res) => {
  const { id_user } = req.decoded
  console.log(12412)
  connection.query(`SELECT * FROM todos WHERE id_user=?`, id_user,
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
      } else {
        return res.status(200).json({ status: 200, rows })
      }
    }
  )
}

exports.getTodosId = async (req, res) => {
  const { id_user } = req.decoded
  const { id_todo } = req.params
  connection.query(`SELECT * FROM todos WHERE id_user=? AND id_todo=?`, [id_user, id_todo],
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
      } else {
        return res.status(200).json({ status: 200, rows })
      }
    }
  )
}


exports.addTodos = async (req, res) => {
  const { id_user } = req.decoded
  const { todo } = req.body
  if (!todo) {
    return res.status(400).json({ status: 400, message: "Tidak boleh kosong" })
  }
  connection.query(`INSERT INTO todos(id_user,todo) VALUES(?,?)`, [id_user, todo],
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
      } else {
        return res.status(200).json({ status: 200, message: "Berhasil menambahkan to do" })
      }
    }
  )
}

exports.editTodos = async (req, res) => {
  const { id_user } = req.decoded
  const { id_todo } = req.params
  const { todo } = req.body
  if (!todo) {
    return res.status(400).json({ status: 400, message: "Tidak boleh kosong" })
  }
  connection.query(`UPDATE todos SET todo=? WHERE id_user=? AND id_todo=? `, [todo, id_user, id_todo],
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
      } else {
        return res.status(200).json({ status: 200, message: "Berhasil mengedit to do" })
      }
    }
  )
}

exports.deleteTodos = async (req, res) => {
  const { id_todo } = req.params
  connection.query(`DELETE FROM todos WHERE id_todo=?`, [id_todo],
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal Server Error" });
      } else {
        return res.status(200).json({ status: 200, message: "Berhasil menghapus to do" })
      }
    }
  )
}

