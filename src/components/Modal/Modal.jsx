import {useEffect} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalViewer, ModalImg } from '../Modal/Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, tags, modalImg }) => {
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code !== 'Escape') {
        return;
      }
      closeModal();
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalViewer>
        <ModalImg src={modalImg} alt={tags} />
      </ModalViewer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  modalImg: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};

