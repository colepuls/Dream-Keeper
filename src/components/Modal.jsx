import '../assets/Modal.css';

/**
 * titleValue - property for title name.
 * onTitleChange - property for editing title name.
 * onSave - property for saving title.
 * onCancel - property for canceling dream save.
 * @param { titleValue, onTitleChange, onSave, onCancel } // Properties for title Modal.
 * @returns html for Title prompt (Modal).
 */
export default function Modal({ titleValue, onTitleChange, onSave, onCancel }) {
  return (
    <div id="titleModal" className="modal" style={{ display: 'flex' }}>
      <div className="modal-box">
        <h2>Title your dream</h2>
        <input
          id="titleField"
          type="text"
          value={titleValue}
          onChange={(e) => onTitleChange(e.target.value)}
          autoFocus
        />
        <button id="titleSave" onClick={onSave}>Save</button>
        <button id="titleCancel" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}