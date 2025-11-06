// import React from 'react';

// function LostSomething() {
//   return (
//     <section className="lost-something">
//       <h2>Lost Something?</h2>
//       <form>
//         <input type="text" placeholder="Name" />
//         <input type="text" placeholder="Item" />
//         <input type="tel" placeholder="Phone" />
//         <input type="email" placeholder="Email" />
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default LostSomething;


import React, { useState } from 'react';
import './LostSomething.css';

function LostSomethingForm() {
  const [formData, setFormData] = useState({
    name: '',
    item: '',
    phone: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submit logic here, for example an API call
    alert(`Submitted:\nName: ${formData.name}\nItem: ${formData.item}\nPhone: ${formData.phone}\nEmail: ${formData.email}`);
  };

  return (
    // <form className="lost-form" onSubmit={handleSubmit}>
    //   <input
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //     type="text"
    //     placeholder="Name"
    //     className="lost-input"
    //     required
    //   />
    //   <input
    //     name="item"
    //     value={formData.item}
    //     onChange={handleChange}
    //     type="text"
    //     placeholder="Item"
    //     className="lost-input"
    //     required
    //   />
    //   <input
    //     name="phone"
    //     value={formData.phone}
    //     onChange={handleChange}
    //     type="tel"
    //     placeholder="Phone"
    //     className="lost-input"
    //     required
    //   />
    //   <input
    //     name="email"
    //     value={formData.email}
    //     onChange={handleChange}
    //     type="email"
    //     placeholder="Email"
    //     className="lost-input"
    //     required
    //   />
    //   <button type="submit" className="lost-submit-btn">
    //     Submit
    //   </button>
    // </form>

    <section id="contact" className="py-20 bg-hotel-darker">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-8xl font-bold text-hotel-light mb-6">
                Lost<br />
                Something?
              </h2>
            </div>
            
            {/* <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Name</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Phone</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="tel" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Email</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="email" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">What have you lost?</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <textarea 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none resize-none"
                    rows={3}
                    placeholder="Describe what you've lost..."
                  />
                </div>
              </div>
            </div> */}
            
            {/* <Button variant="hotel" size="lg" className="w-full md:w-auto">
              Submit
            </Button> */}
          </div>

          <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Name</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Phone</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="tel" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">Email</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <input 
                    type="email" 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-hotel-muted text-sm uppercase tracking-wide">What have you lost?</label>
                <div className="border-b border-hotel-muted/30 pb-2">
                  <textarea 
                    className="w-full bg-transparent text-hotel-light placeholder-hotel-muted/60 focus:outline-none resize-none"
                    rows={3}
                    placeholder="Describe what you've lost..."
                  />
                </div>
              </div>
              <button type="submit" className="lost-submit-btn bg-white space-y-2">
                Submit
            </button>
              
            </div>
            {/* <button type="submit" className="lost-submit-btn bg-white">
                Submit
            </button> */}
          
          
          {/* <div className="space-y-8">
            <div className="bg-hotel-dark/50 rounded-2xl p-6 border border-hotel-muted/20">
              <h3 className="text-hotel-light text-xl font-semibold mb-4">Location & Hours</h3>
              <div className="space-y-4 text-hotel-muted">
                <div>
                  <p className="font-semibold text-hotel-gold">Address</p>
                  <p>123 King Street<br />Sydney NSW 2000</p>
                </div>
                <div>
                  <p className="font-semibold text-hotel-gold">Hours</p>
                  <p>Mon-Thu: 4pm - 12am<br />Fri-Sat: 4pm - 3am<br />Sun: 4pm - 10pm</p>
                </div>
                <div>
                  <p className="font-semibold text-hotel-gold">Contact</p>
                  <p>Phone: (02) 9123 4567<br />Email: info@royalgeorge.com.au</p>
                </div>
              </div>
            </div>
            
            <div className="bg-hotel-muted/10 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-hotel-muted">Interactive Map</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default LostSomethingForm;

