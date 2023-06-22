import { useState, useEffect } from 'react'
import api from '../utils/api.js'
import Card from './Card.js'

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
    api.getCards()
    .then((cardData) => {
      setCards(cardData)
    })
    .catch((error) => {
      console.log(`Ошибка, ${error}`)
      })
    })
    .catch((error) => {
      console.log(`Ошибка, ${error}`)
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="фото профиля" className="profile__avatar" />
          <button type="button" className="profile__avatar-editbutton" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <p className="profile__info-job">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}/>
      </section>
      <section className="photo-galery">
        <ul className="elements">{
          cards.map(
            (data) => {
              return (<Card key={data._id} card={data} onCardClick={onCardClick}/>)
            }
          )}</ul>
      </section>
    </main>
  )
}