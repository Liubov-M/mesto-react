import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'
import { useState } from 'react'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  }
  function handleCardClick(props) {
    setSelectedCard(props)
  }

  return (
  <div className="App">
    <div className="page">
      <Header/>

      <Main
      onEditProfile={handleEditProfileClick}
      onEditAvatar={handleEditAvatarClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      />

      <Footer/>

      <PopupWithForm
      name="#edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="text"
          name="username"
          id="firstname"
          placeholder="Имя Фамилия"
          minLength={2}
          maxLength={40}
          required=""
        />
        <span className="popup__input-error" id="firstname-error" />
        <input
          className="popup__input"
          type="text"
          name="job"
          id="job"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="popup__input-error" id="job-error" />
      </PopupWithForm>

      <PopupWithForm
      name="#edit-cards"
      title="Новое место"
      buttonText="Создать"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="text"
          name="title"
          id="object"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__input-error" id="object-error" />
        <input
          className="popup__input"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__input-error" id="link-error" />
      </PopupWithForm>

      <PopupWithForm
      name="#edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      >
        <input
          className="popup__input"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на фото"
          required=""
        />
        <span className="popup__input-error" id="avatar-error" />
      </PopupWithForm>

      <PopupWithForm
      name="#delete-popup"
      title="Вы уверены?"
      buttonText="Да"
      />
      <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </div>
  </div>
  );
}

export default App;
