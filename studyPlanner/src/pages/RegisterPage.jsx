import "./RegisterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Library from "../assets/library.png";
export default function RegisterPage() {
  return (
    <div className="RegisterPage">
      <main className="propaganda">
        <img src={Library} alt="" className="imgpropaganda"/>
        <div className='infopropaganda'>
          <h1 className="titlepropaganda">The Digital Curator</h1>
          <span className="textpropaganda">A scholarly, premium reading experience. Dense information made<p>effortless through serif authority and generous whitespace.</p></span>
        </div>
      </main>
      <main className="info-register">
        <div className="voltar">
          <span>← Voltar</span>
        </div>
        <div className="formulario">
          <h1 className="title-formulario">Silk Study</h1>
          <span className="p-formulario">Inicie sua jornada acadêmica.</span>
          <div className="info1">
            <h2 className="h2-info">Nome completo</h2>
            <input type="text" placeholder="Seu nome completo" className="inputinfo"/>
          </div>
          <div className="info2">
            <h2 className="h2-info">email</h2>
            <input type="email" placeholder="seu@email.com" className="inputinfo"/>
          </div>
          <div className="info3">
            <h2 className="h2-info">senha</h2>
            <input type="password" placeholder="Mínimo de 8 caracteres" className="inputinfo"/>
          </div>
          <div className="info4">
            <h2 className="h2-info">confirmar senha</h2>
            <input type="password" placeholder="Repita sua senha" className="inputinfo"/>
          </div>
        </div>
        <span>Criar Conta <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></span>
      </main>
    </div>
  )
}