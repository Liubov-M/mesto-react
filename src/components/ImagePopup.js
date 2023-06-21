export default function ImagePopup({ card, onClose, isOpen }) {
    return (
      <div className={`popup  ${isOpen && 'popup_opened popup_opened_opaque'}`}>
        <div className="popup__card">
          <img className="popup__image" src={card.link} alt={card.name} />
          <h4 className="popup__title">{card.name}</h4>
          <button className="popup__close-button" type="button" onClick={onClose}/>
        </div>
      </div>
    )
  }