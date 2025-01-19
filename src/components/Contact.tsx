import React, { useState } from 'react';
import { MailIcon, MessageSquareIcon, UserIcon } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State for confirmation message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send the form data to your email using EmailJS
    emailjs
      .send(
        'service_uij0c88',      // Service ID (from EmailJS dashboard)
        'template_8g49vnz',     // Template ID (from EmailJS dashboard)
        formData,               // The form data (passed as the template variables)
        'ru_fZ6p6b5Tf1Syjs'     // User ID (from EmailJS dashboard)
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          // Optionally, reset the form after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          
          // Set the confirmation message
          setConfirmationMessage('Thanks for reaching out! Your message has been submitted.');

          // Hide the confirmation message after 3 seconds
          setTimeout(() => {
            setConfirmationMessage('');
          }, 3000);
        },
        (err) => {
          console.error('Error sending message:', err);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="pl-10 w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="pl-10 w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="relative">
              <MessageSquareIcon className="absolute left-3 top-4 text-gray-400" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="pl-10 w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Confirmation Message */}
          {confirmationMessage && (
            <p className="mt-4 text-center text-green-500 font-semibold">{confirmationMessage}</p>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Or connect with me on social media:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/mihirpatel13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mihirpatel1304"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:mihir.patel130403@email.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
