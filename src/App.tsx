import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import RotaProtegida from "./routes/RotaProtegida"

function App() {

  return (
    // habilita a navegação entre páginas
    <BrowserRouter>
    {/* agrupa as rotas da aplicação */}
      <Routes>
    {/* Route: associa um endereço a um componente
        Path: define o endereo da pagina
        elemnet: define qual componente sera exibido
     */}
        <Route path="/" element={<Login />} />

        <Route element={<RotaProtegida />}>
        <Route path="/home" element={<Home />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App