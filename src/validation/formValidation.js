export const validateEmail = (email, setError, message = "Email") => {
  if (!email) {
    setError(`${message} é obrigatório.`)
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    setError("Formato de email inválido.")
    return false
  }
  setError("")
  return true
}

export const validateName = (name, setError, message = "Nome") => {
  if (!name) {
    setError(`${message} é obrigatório(a).`)
    return false
  }
  setError("")
  return true
}

export const validateDocument = (document, type, setError, message) => {
  const docLabel = message || (type === "PF" ? "CPF" : "CNPJ")
  if (!/^\d+$/.test(document)) {
    setError(`${docLabel} deve conter apenas números.`)
    return false
  }
  if (!document) {
    setError(`${docLabel} é obrigatório.`)
    return false
  }
  if (type === "PF" && document.length !== 11) {
    setError(`${docLabel} deve ter 11 dígitos.`)
    return false
  }
  if (type === "PJ" && document.length !== 14) {
    setError(`${docLabel} deve ter 14 dígitos.`)
    return false
  }
  setError("")
  return true
}

export const validateDate = (date, setError, message = "Data") => {
  if (!date) {
    setError(`${message} é obrigatória.`)
    return false
  }
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(date)) {
    setError("Formato de data inválido.")
    return false
  }
  const dateObj = new Date(date)
  const isValidDate = dateObj instanceof Date && !isNaN(dateObj.getTime())
  if (!isValidDate) {
    setError("Data inválida.")
    return false
  }
  const minDate = new Date("1900-01-01")
  const maxDate = new Date("2100-12-31")
  if (dateObj < minDate || dateObj > maxDate) {
    setError("Data fora do intervalo permitido.")
    return false
  }
  setError("")
  return true
}

export const validatePhone = (phone, setError, message = "Telefone") => {
  if (!phone) {
    setError(`${message} é obrigatório.`)
    return false
  }
  if (!/^\d+$/.test(phone)) {
    setError(`${message} deve conter apenas números.`)
    return false
  }
  const phoneLength = phone.length
  if (phoneLength < 10 || phoneLength > 11) {
    setError(`${message} deve ter 10 ou 11 dígitos.`)
    return false
  }
  setError("")
  return true
}

export const validatePassword = (password, setError, message = "Senha") => {
  if (!password) {
    setError(`${message} é obrigatório.`)
    return false
  }
  setError("")
  return true
}
