import React, { useState, useEffect } from 'react';

// Universal validation hook
const UseValidateHook = (closeModal) => {
    const [formData, setFormData] = useState({
        url: '',
        title: '',
        costMonth1: '',
        costMonth2: '',
        oldprice: '',
        price: '',
        category: '',
        brand: '',
        CattegoryImage: '',
        cattegory: '',
        brandIMG: ''
    });
    

    const [existingBrands, setExistingBrands] = useState([]);
    const [existingCategories, setExistingCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim()
        });
    };

    // Fetch existing brands and categories when component mounts
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('http://localhost:5000/Brands/');
                if (response.ok) {
                    const data = await response.json();
                    setExistingBrands(data || []);
                } else {
                    console.error('Mavjud brandlarni olishda xatolik yuz berdi');
                }
            } catch (error) {
                console.error('Xatolik:', error);
            }
        };

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

        fetchBrands();
        fetchCategories();
    }, []);

    const handleSubmitProduct = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/Products';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Mahsulot muvaffaqiyatli qo\'shildi');
                closeModal();
            } else {
                console.error('Mahsulotni qo\'shishda xatolik yuz berdi');
            }
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    const handleSubmitCategory = async (e) => {
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
                closeModal();
            } else {
                console.error('Kategoriya qo\'shishda xatolik yuz berdi');
            }
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    const handleSubmitBrand = async (e) => {
        e.preventDefault();

        const newBrand = {
            brandIMG: formData.brandIMG,
            brand: formData.brand
        };

        try {
            const response = await fetch('http://localhost:5000/Brands', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBrand)
            });

            if (response.ok) {
                console.log('Brend muvaffaqiyatli qo\'shildi');
                setExistingBrands([...existingBrands, newBrand]);
                closeModal();
            } else {
                console.error('Brend qo\'shishda xatolik yuz berdi');
            }
        } catch (error) {
            console.error('Xatolik:', error);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmitProduct,
        handleSubmitCategory,
        handleSubmitBrand
    };
};

export default UseValidateHook;