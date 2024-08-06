const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-black">EaseMySailing</h2>
            <p className="mt-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <p className="mt-4 font-bold text-green-500">
              Are you a Vendor?{" "}
              <a href="#" className="text-green-700 underline">
                Join Us
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick link</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Recruiter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  GDPR & Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect with Us</h3>
            <ul className="space-y-1">
              <li className="text-gray-600">📞 (01) xxx xxx xxxx</li>
              <li className="text-gray-600">✉️ example@gmail.com</li>
              <li>
                <a
                  href="https://www.easemysailing.au/"
                  className="text-gray-600"
                >
                  🌐 https://www.easemysailing.au/
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600">
                🌐
              </a>
              <a href="#" className="text-gray-600">
                📘
              </a>
              <a href="#" className="text-gray-600">
                📸
              </a>
            </div>
          </div>
        </div>
        <div className="border-t flex border-gray-300 mt-8 pt-4 justify-between">
          <p className="text-gray-600">
            Copyright © 2023 | All Rights Reserved
          </p>
          <p className="text-gray-600">Designed with ❤️ by YES IT Labs LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
