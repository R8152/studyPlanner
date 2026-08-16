import "./RegisterPage.css";
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
        <div>
          <h1>Silk Study</h1>
        </div>
      </main>
    </div>
  )
}