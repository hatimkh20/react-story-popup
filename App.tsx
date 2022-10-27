import * as React from 'react';
import { StoriesPopupModal } from './StoriesPopupModal';
import './style.css';

export default function App() {
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    console.log('open Modal');
    setOpenModal(!openModal);
  };

  return (
    <React.Fragment>
      <div className={openModal && 'modal-open'}>
        {openModal && (
          <React.Fragment>
            <button
              type="button"
              className="cancelPopupBtn"
              data-dismiss="modal"
              aria-label="Close"
              onClick={openModalHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="storiesPopup">
              {' '}
              <StoriesPopupModal />{' '}
            </div>
          </React.Fragment>
        )}
        <div className="centerDiv">
          <div className="thumbContainer">
            {/* LOADING RING */}
            <div className="thumbRing">
              <div />
              <div />
              <div />
              <div />
            </div>

            {/* ALREADY LOAD RING */}
            {/* <div className={styles.staticThumbRing}></div> */}
            <div className="msgWrapper">
              <div className="tooltip">
                Check it out real people experiencing what's inside them
              </div>
              <div className="modalBtn" onClick={openModalHandler}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  className="avatar"
                  alt="Instagram avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
