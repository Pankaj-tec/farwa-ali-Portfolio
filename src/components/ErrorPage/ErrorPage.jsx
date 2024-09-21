import "./ErrorPage.css";
import errorImg from "../../../public/images/error.jpg" 
const ErrorPage = () => {
  return (
    <section className="error">
        <div className="error__cont container">
            <div className="error__img">
                <img src={errorImg} alt="error" />
            </div>
            <p className="error__title">Page Not Found</p>
        </div>
    </section>
  )
}

export default ErrorPage