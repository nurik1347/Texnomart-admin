import React, { useState } from 'react';
import './style.css';
import UseValidateHook from '../Hooks/useValidateHook';

function BrandsCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { formData, handleChange, handleSubmit } = UseValidateHook(closeModal);

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
            <h2>Brand qo'shish</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="url"
                id="brandIMG"
                name="brandIMG"
                placeholder="Brand Image URL"
                value={formData.brandIMG}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="brand"
                name="brand"
                placeholder="Brand nomi"
                value={formData.brand}
                onChange={handleChange}
                required
              />
              <button type="submit">Jo'natish</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrandsCreate;
