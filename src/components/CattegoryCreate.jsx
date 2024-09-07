import { useState, useEffect } from 'react';

const UseValidateCattegory = (closeModal) => {
    const [formData, setFormData] = useState({
        CattegoryImage: '',
        cattegory: ''
    });

    const [existingCategories, setExistingCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/Cattegory/');
                if (response.ok) {
                    const data = await response.json();
                    setExistingCategories(data || []);
                } else {
                    console.error('Mavjud kategoriyalarni olishda xatolik yuz berdi');
                }
            } catch (error) {
                console.error('Xatolik:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCategory = {
            CattegoryImage: formData.CattegoryImage,
            cattegory: formData.cattegory
        };

        try {
            const url = 'http://localhost:5000/Cattegory';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCategory)
            });

            if (response.ok) {
                console.log('Kategoriya muvaffaqiyatli qo\'shildi');
                setExistingCategories([...existingCategories, newCategory]);
                closeModal(); // modalni yopish uchun
            } else {
                console.error('Kategoriya qo\'shishda xatolik yuz berdi');
            }
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit
    };
};

export default UseValidateCattegory;
