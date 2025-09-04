import proveLogo from '../assets/Logo.jpg'

function Header() {
  return (
    <>
      <header>
        <h1>pROVe Team</h1>
        <img src={proveLogo} className="logo prove" alt="Prove logo" />
      </header>
    </>
  )
}

export default Header
