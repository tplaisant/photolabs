import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({
  photo,
  likedPhotos,
  onClickClose,
  handleClickFav
}) => {

  const handleClickClose = () => {
    onClickClose(null)
  }

  const similarPhotos = photo.similar_photos

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClickClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__fav-icon">
          <PhotoFavButton
            id={photo.id} 
            likedPhotos={likedPhotos}
            handleClickFav={handleClickFav}
          />
        </div>

        <img
          src={photo.urls.full}
          alt={`Photo taken in ${photo.location.city}`}
          className="photo-details-modal__image"
        />
      </div>

      <div className="photo-details-modal__info">
        <h3>{photo.user.name}</h3>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>

      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList
          photos={Object.values(similarPhotos || {}).filter(p => p.id !== photo.id)}
          likedPhotos={likedPhotos}
          handleClickFav={handleClickFav}
        />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;