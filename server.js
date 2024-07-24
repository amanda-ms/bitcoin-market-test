import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.use(express.static("dist"))
app.use(express.json())

app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html")
})

app.post("/registration", (req, res) => {
  const { email, type, name, document, date, phone, password } = req.body

  if (!email || !type) {
    return res
      .status(400)
      .json({ error: "Email e tipo de cadastro são obrigatórios" })
  }

  if (type === "PF") {
    if (!name || !document || !phone || !date) {
      return res
        .status(400)
        .json({ error: "Todos os campos de Pessoa Física são obrigatórios" })
    }
  } else if (type === "PJ") {
    if (!name || !document || !phone || !date) {
      return res
        .status(400)
        .json({ error: "Todos os campos de Pessoa Jurídica são obrigatórios" })
    }
  }

  if (!password) {
    return res.status(400).json({ error: "Senha é obrigatória" })
  }

  res.status(201).json({ message: "Cadastro realizado com sucesso!" })
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
