import React, { useState } from 'react';
import UseValidateHook from '../Hooks/useValidateHook.jsx'; // To'g'ri yo'lni ko'rsating
import './style.css';

function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { formData, handleChange, handleSubmit } = UseValidateHook();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='Dobavit' onClick={openModal}>Добавить</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Добавить продукты</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="url"
                name="url"
                className="form-input"
                placeholder="URL"
                value={formData.url}
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="costMonth1"
                className="form-input"
                placeholder="24 oylik narxi"
                value={formData.costMonth1}
                onChange={handleChange}
              />
              <input
                type="text"
                name="costMonth2"
                className="form-input"
                placeholder="12 oylik narxi"
                value={formData.costMonth2}
                onChange={handleChange}
              />
              <input
                type="text"
                name="oldprice"
                className="form-input"
                placeholder="Old Price"
                value={formData.oldprice}
                onChange={handleChange}
              />
              <input
                type="text"
                name="price"
                className="form-input"
                placeholder="Narxi"
                value={formData.price}
                onChange={handleChange}
              />
              <input
                type="text"
                name="category"
                className="form-input"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
              />
              <input
                type="text"
                name="brand"
                className="form-input"
                placeholder="Brands"
                value={formData.brand}
                onChange={handleChange}
              />
              <button className='Button-otpravit' type="submit">Отправить</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
