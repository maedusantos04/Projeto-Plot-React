import { useState } from "react";
import Logo from "../../assets/Logo vetorizado - claro.svg"
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { fazerLogin } from "../../api/autenticacao";
import { salvarSessao } from "../../services/sessaoService";


function Login() {
    //cria um estado par armazenar e atualizar email e senha    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // console.log("Email", email)
    // console.log("Senha", senha)

    // hook do react router que permite navegar entre as paginas
    const navigate = useNavigate();

    // estado para armazenar mensagens de erro
    const [erro, setErro] = useState("");

    const [carregando, setCarregando] = useState(false);

    // função assincrona responsavel por gerenciar o login
    async function gerenciarLogin(evento: React.SubmitEvent<HTMLFormElement>) {

        evento.preventDefault();

        setErro("");
        setCarregando(true);

        try{
            const resposta = await fazerLogin(email, senha);

            salvarSessao(resposta);

            navigate("/home", { replace: true });
        } catch (erro) {
            console.error("Erro ao realizar login: ", erro);
            setErro("E-mail ou senha inválidos.");
        } finally {
            setCarregando(false);
        }
    }


    
    return(
        <main className="area-login">

            <section className="conteudo-login">

                <img className="logo" src={Logo} alt="Plot!" />

                <p className="descricao">Crie suas listas, marque o que já assistiu e descubra novas histórias.</p>

                <form onSubmit={gerenciarLogin}>

                    <div className="campo">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" name="email" placeholder="exemplo@email.com" 
                        value={email} 
                        // atualiza o estado da senha conforme o usuário digita
                        // evento -> evento de alteração
                        // evento.target -> input type=email
                        // evento.target.value -> email digitado pelo usuário
                        onChange={(evento) => setEmail(evento.target.value)} />
                    </div>

                    <div className="campo">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" name="senha" placeholder="Digite sua senha" 
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)} />
                    </div>

                    {erro && <p className="erro-login">{erro}</p>}

                    <div className="opcoes-login">

                        <label className="lembrar">
                            <input type="checkbox" name="lembrar" />
                            <span>Lembrar de mim</span>
                        </label>

                        <a href="#">Esqueceu a senha?</a>

                    </div>

                    <button type="submit" className="botao-entrar" disabled={carregando}>{carregando ? "Entrando..." : "Entrar"}</button>

                </form>

                <p className="mensagem-cadastro">Ainda não tem uma conta? <a href="#">Contate um administrador</a></p>

            </section>

        </main>
    );
}

export default Login;