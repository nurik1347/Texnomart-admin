import React, { useState, useEffect } from 'react';
import './style.css';

function New() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        CattegoryImage: "",
        new: "",
        cattegory: ""

    });
    const [existingBrands, setExistingBrands] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('http://localhost:5000/Cattegory/');
                if (response.ok) {
                    const data = await response.json();
                    setExistingBrands(data || []); // Set existing brands correctly
                } else {
                    console.error('Error fetching existing brands');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchBrands();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the new brand object
        const newBrand = {
            CattegoryImage: formData.CattegoryImage,
            new: formData.new,
            cattegory: formData.cattegory
        };

        try {
            // Send the new brand object to the server
            const response = await fetch('http://localhost:5000/Cattegory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBrand)
            });

            if (response.ok) {
                console.log('Brand muvaffaqiyatli qoshildi');
                // Update existing brands with the new brand
                setExistingBrands([...existingBrands, newBrand]);
                closeModal();
            } else {
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button className='Dobavit' onClick={openModal}>Добавить</button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <h2>Add Cattegory</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="url"
                                id="CattegoryImage"
                                name="CattegoryImage"
                                placeholder="Cattegory Image URL"
                                value={formData.CattegoryImage}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="Sana"
                                name="Sana"
                                placeholder="Sana"
                                value={formData.new}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                id="cattegory"
                                name="cattegory"
                                placeholder="Product title"
                                value={formData.cattegory}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default New;
