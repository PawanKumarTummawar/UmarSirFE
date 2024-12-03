import React, { useState } from 'react';

const RegisterProduct = () => {
    const[userValues, setUserValues] = useState({});

    function handleSubmit () 
    {
        alert("Form is Submitted Successfully")
    }
    return (
        <div>
            <form className='form-container' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="prodTitle">Product Title</label>
                    <input
                        type="text"
                        name="rno"
                        id="prodTitle"
                        value={userValues.rno}
                    />
                </div>

                <div>
                    <label htmlFor="prodDescription">Product Description</label>
                    <input
                        type="text"
                        name="productDescription"
                        id="productDescription"
                        value={userValues.Description}
                    />
                </div>

                <div>
                    <label htmlFor="prodTitle">Product Category</label>
                    <input
                        type="text"
                        name="productCategory"
                        id="productCategory"
                        value={userValues.category}
                    />
                </div>

                <div>
                    <label htmlFor="photo">Upload Photo</label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        value={userValues.image}
                    />
                </div>

                <div className='button-group'>
                    <button type='submit'>Register</button>
                    <button type='button'>Cancel</button>    
                </div> 
            </form> 
            {console.log(userValues)};
        </div>
    );
};

export default RegisterProduct;
