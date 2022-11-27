import React from 'react';
import ProductAddingForm from '../../../Components/ProductAddingForm';
import AddServiceForm from './AddServiceForm';

const AddProduct = () => {
    return (
        <div className='border border-stone-400 rounded-md w-full p-5'>
           <ProductAddingForm></ProductAddingForm>
        </div>
    );
};

export default AddProduct;