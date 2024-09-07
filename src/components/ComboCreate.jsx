// ComboCreate Component
function ComboCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define closeModal first
  const closeModal = () => {
      setIsModalOpen(false);
  };

  // Now you can safely use closeModal in UseValidateCombo
  const { formData, handleChange, handleSubmitProduct } = UseValidateHook(closeModal);

  const openModal = () => {
      setIsModalOpen(true);
  };

  return (
      <div>
          <button className='Dobavit' onClick={openModal}>Добавить</button>

          {isModalOpen && (
              <div className="modal">
                  <div className="modal-content">
                      <span className="close-btn" onClick={closeModal}>&times;</span>
                      <h2>Combo qo'shing</h2>
                      <form onSubmit={handleSubmitProduct}>
                          <input
                              type="url"
                              id="url"
                              name="url"
                              placeholder="URL"
                              value={formData.url}
                              onChange={handleChange}
                          />
                          <input
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Title"
                              value={formData.title}
                              onChange={handleChange}
                          />
                          <input
                              type="text"
                              id="oldprice"
                              name="oldprice"
                              placeholder="OLD PRICE"
                              value={formData.oldprice}
                              onChange={handleChange}
                          />
                          <input
                              type="text"
                              id="newprice"
                              name="newprice"
                              placeholder="NEW PRICE"
                              value={formData.newprice}
                              onChange={handleChange}
                          />
                          <button type="submit">Добавить</button>
                      </form>
                  </div>
              </div>
          )}
      </div>
  );
}

export default ComboCreate;