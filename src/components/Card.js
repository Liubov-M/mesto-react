export default function Card({ card, onCardClick }) {
  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name}
      onClick={() => onCardClick({link: card.link, name: card.name})}/>
      <button className="element__delete-button" />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <button className="element__button-like" type="button" />
        <span className="element__counter-like" />
      </div>
    </li>
  )
}