import './LoginPage.css'

export default function LoginPage() {
  return (
    <>
        <div className='LoginPage'>
            <label className='SilkStudy'>Silk Study</label>
            <h2 className='welcoming'>Welcome Back.</h2>
            <span className='welcoming2'>Please enter your details to access your curated library.</span>
            <main className='LoginInfo'>
                <div>
                    <h3 className='email'>Email Address</h3>
                    <input type="email" name="" id="" placeholder='scholar@silkstudy.edu' className='input'/>
                </div>
                <div>
                    <div className='password'>
                        <h3 className='password-title'>Password</h3>
                        <span className='forgotpassword'>Forgot Password?</span>
                    </div>
                    <input type="password" name="" id="" placeholder='••••••••' className='input'/>
                </div>
                <div className='div-checkbox'>
                    <input type="checkbox" name="" id="" className='checkbox'/>
                    <span className='loggedin'>Keep me logged in</span>
                </div>
                <button className='entrar'>Entrar</button>
            </main>
        </div>

    </>
  )
}
