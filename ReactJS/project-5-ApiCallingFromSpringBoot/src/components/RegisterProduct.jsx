import React from 'react';

const RegisterProduct = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="prodTitle">Product Title</label>
                    <input
                        type="text"
                        name="rno"
                        id="prodTitle"
                        value={userValues.rno}
                    />
                </div>
            </form>
        </div>
    );
};

export default RegisterProduct;
