


import '../base/feed-form.scss';
import '../base/_button.scss';
import '../base/_title.scss';
import './consultation.scss';


const Consultation = () => {

return (
    <div className="consultation">
    <div className="container">
        <h2 className="title title_left">Получите бесплатную консультациюпо подбору пульсометра</h2>
        <div className="consultation__descr">Просто заполните форму заявки и мы перезвоним вам в течении 10 минут</div>
        <form className="feed-form" action="#">
            <input required name="name" placeholder="Ваше имя" type="text" />
            <input required name="number" placeholder="Ваш телефон" type="number" />
            <input required name="email" placeholder="Ваш E-mail" type="email" />
            <button className='button button_submit'>заказать кОНСУЛЬТАЦИЮ</button>
        </form>
    </div>
</div>
)

}

export default Consultation;



