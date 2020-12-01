import server from './config/express'

const app = server()
const port = app.get('port')

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`)
})
