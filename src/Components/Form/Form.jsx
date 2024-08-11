import { useState } from 'react';
import './form.scss'; 
import { IoClose } from "react-icons/io5";

export default function Form() {
  const [data, setValues] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    state: "",
    city: "",
    payment: "",
    address: "",
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(data, null, 2);
    console.log(jsonData);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  if (formVisible) {
    document.body.classList.add('active-form');
  } else {
    document.body.classList.remove('active-form');
  }

  return (
    <>
      <button onClick={toggleFormVisibility} className="btn-form">
        Open Form
      </button>

      {formVisible && (
        <div className="form-popup">
          <div className="overlay" onClick={toggleFormVisibility}></div>
          <div className="form-content">
            <form onSubmit={handleSubmit} className='detailform'>
              <header className='detailhead'>Payment Details</header>

              <div className="detailinput">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChanges}
                  placeholder='Enter Full Name'
                  required
                />
              </div>

              <div className="detailinput">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChanges}
                  placeholder='example@gmail.com'
                  required
                />
              </div>

              <div className="detailinput">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phonenumber"
                  onChange={handleChanges}
                  placeholder='1234567890'
                  required
                />
              </div>

              <div className="column">
                <div className="detailinput">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    onChange={handleChanges}
                    placeholder='Enter State'
                    required
                  />
                </div>

                <div className="detailinput">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChanges}
                    placeholder='Enter City'
                    required
                  />
                </div>
              </div>

              <div className="paymentdetail">
                <h3>Payment Method</h3>
                <div className="detailpayment">
                  <div className="payment">
                    <input
                      type="radio"
                      name="payment"
                      value="cashondelivery"
                      onChange={handleChanges}
                      id="check-cashondelivery"
                      required
                    />
                    <label htmlFor="check-cashondelivery">Cash on delivery</label>
                  </div>
                  <div className="payment">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      id="check-card"
                      onChange={handleChanges}
                      disabled
                    />
                    <label htmlFor="check-card">Credit Card</label>
                  </div>
                  <div className="payment">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      id="check-online"
                      onChange={handleChanges}
                      disabled
                    />
                    <label htmlFor="check-online">Online Payment</label>
                  </div>
                </div>
              </div>

              <div className="detailinput">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChanges}
                  placeholder='Enter Address'
                  required
                />
              </div>

              <button type='submit' className='btn-detail'>Submit</button>
            </form>

            <button className="close-form" onClick={toggleFormVisibility}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

