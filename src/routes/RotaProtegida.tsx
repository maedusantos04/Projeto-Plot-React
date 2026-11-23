import { Navigate, Outlet } from "react-router-dom";
import { sessaoValida } from "../services/sessaoService";

// componente responsavel por proteger rotas que exigem autentiacao
function RotaProtegida () {

    if(!sessaoValida()) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default RotaProtegida;