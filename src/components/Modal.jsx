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