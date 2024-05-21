import { useState } from 'react';

const citiesInIndia = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara"];

const Contact = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('general');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div className='back'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='head'>
                CONTACT US
              </div>
              <div className='par'>Lorem ipsum, doloremque ea vitae provident consequuntur ex quos voluptatum distinctio.</div>
              <div className='form'>
                <form onSubmit={handleSubmit}>
                  <div className='name-cat'>
                    <div>
                      <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                      <select type="category" id="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="obc">OBC</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className='name-cat'>
                    <div>
                      <input type="tel" placeholder="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                      <input id='city' type="text" placeholder='City' list="cities" value={city} onChange={(e) => setCity(e.target.value)} />
                      <datalist id="cities">
                        {citiesInIndia.map((city, index) => (
                          <option key={index} value={city} />
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <textarea type="message" id="message" placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <div className='btn'>
                    <button id='btn' type="submit">Contact Us</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
