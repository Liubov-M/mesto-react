export default function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <form className="popup__form" name={name} noValidate="">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <h3 className="popup__heading">{title}</h3>
        {children}
        <button
          className="popup__submit-button popup__submit-button_enabled"
          type="submit"
        >
          Сохранить
        </button>
      </form>
    </div>
  )
}