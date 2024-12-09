import React from 'react';

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              I'm always interested in new projects and collaborations. Feel free to reach out to discuss your ideas or schedule a shoot.
            </p>
            <div className="space-y-2">
              <p className="text-gray-800">
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@johndoe.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  contact@johndoe.com
                </a>
              </p>
              <p className="text-gray-800">
                <strong>Location:</strong>{" "}
                <span className="text-gray-600">New York City, NY</span>
              </p>
              <p className="text-gray-800">
                <strong>Instagram:</strong>{" "}
                <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  @johndoe
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};