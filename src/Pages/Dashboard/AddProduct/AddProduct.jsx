import React from 'react';
import ProductAddingForm from '../../../Components/ProductAddingForm';
import AddServiceForm from './AddServiceForm';

const AddProduct = () => {
    return (
        <div className='bg-slate-300 w-full min-h-screen p-5'>
           <ProductAddingForm></ProductAddingForm>
        </div>
    );
};

export default AddProduct;