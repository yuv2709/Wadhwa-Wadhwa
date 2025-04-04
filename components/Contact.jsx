import React from 'react';
import { Phone, Mail } from 'lucide-react'; // Importing icons from Lucide

const Contact = () => {
    return (
        
        <div className="bg-[url('/assets/Background_grey.png')] bg-cover bg-no-repeat flex flex-col items-center px-6 lg:px-[12%] pb-16">
            
            {/* Contact Information Card */}
            <div className="w-full max-w-xl bg-white shadow-lg rounded-md p-6 mt-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-oswald text-primary mb-6">Contact Information</h2>
                <div className="text-gray-700 text-lg space-y-4">
                    <p><strong>📍 Address:</strong> Wadhwa & Wadhwa Law Firm, G-6, Kirti Nagar, New Delhi, India</p>
                    
                    {/* Call Button */}
                    <a href="tel:+919810326222" className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition">
                        <Phone size={20} /> Call: +91 98103 26222
                    </a>

                    {/* Email Button */}
                    <a href="mailto:sachinwadhwaadvocate@gmail.com" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition mt-3">
                        <Mail size={20} /> Email: sachinwadhwaadvocate@gmail.com
                    </a>
                </div>
            </div>
            {/* Map Section */}
            <div className="w-full max-w-4xl flex flex-col items-center mt-16">
                <h2 className="text-2xl sm:text-3xl font-oswald text-primary mb-6">Our Location</h2>
                <div className="w-full h-[300px] md:h-[400px] rounded-md shadow-2xl overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.83167752188487!2d77.14315376567616!3d28.65052983206909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743711211557!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>      
    );
};

export default Contact;
