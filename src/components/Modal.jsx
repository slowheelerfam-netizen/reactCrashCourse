import './Modal.css'
//1.6 React Hooks Use State
function Modal({ title, cancelModal, confirmModal }) {
    return (
<>
    <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
            <button 
                onClick={cancelModal} 
                className="btn btn__cancel">
                Cancel
                </button>
            <button onClick={confirmModal} 
                className="btn">
                Confirm
                </button>
        </div>
    </div>
    <div className="backdrop">
    </div>
</>
    )
}
export default Modal;


// function Modal({ title }) {
//     return (
// <>
//     <div classname="modal">
//         <p classname="modal__title">{title}</p>
//         <div classname="modal__buttons">
//         <button onClick={() => console.log('cancel')} className="btn btn__cancel">Cancel</button>
//         <button onClick={() => console.log('confirm')} className="btn">Confirm</button>
//         </div>
//     </div>
//     <div classname="backdrop">
//     </div>
// </>
//     )
// }
// export default Modal;