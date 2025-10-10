import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
      <footer className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <img
              src="https://royalgeorgehotel.com.au/wp-content/themes/royalgeorge/images/logo.jpg"
              alt="RG logo"
              className="h-14 w-auto"
            />
            <p className="text-base leading-7">
              The Royal George Hotel is where the best night out begins. Our
              family owned pub is made up of 4 separate bars including the
              valley’s largest beer garden.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Bars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="w-full overflow-hidden rounded-md ring-1 ring-black/10">
              <iframe
                className="w-full h-64 md:h-72 lg:h-80"
                loading="lazy"
                title="Royal George Hotel - Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Royal%20George%20Hotel%20327%20Brunswick%20St%20Fortitude%20Valley%20QLD%204006&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 text-center text-sm">
            The Royal George Hotel, Cnr Ann & Brunswick Streets, Fortitude
            Valley{" "}
            <a
              href="tel:+61732525224"
              className="underline underline-offset-2 hover:text-yellow-400"
            >
              (07) 3252 5224
            </a>{" "}
            • Copyright RoyalGeorgeHotel. ©️
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;