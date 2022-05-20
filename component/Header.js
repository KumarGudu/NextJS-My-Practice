import headerStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyle.title}>
            <span>Webwork</span> News
        </h1>
        <p className={headerStyle.description}>
            Keep up with the latest news and events from Webwork.
        </p>
    </div>
  )
}

export default Header