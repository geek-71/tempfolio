function SupportSection() {
    return (
        <section id="support" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Background Shapes */}
            <img src="images/shape-06.svg" alt="Shape" className="absolute top-0 left-0" />
            <img src="images/shape-03.svg" alt="Shape" className="absolute top-10 left-10" />
            <img src="images/shape-07.svg" alt="Shape" className="absolute top-20 right-20" />
            <img src="images/shape-12.svg" alt="Shape" className="absolute bottom-0 left-0" />
            <img src="images/shape-13.svg" alt="Shape" className="absolute bottom-0 right-0" />

            {/* Section Title */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Let’s Stay Connected</h2>
                <p className="text-lg text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
            </div>

            {/* Contact Info & Social */}
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative bg-gray-50 p-10 rounded-lg shadow-lg">
                {/* Background Decorations */}
                <img src="images/shape-03.svg" alt="Shape" className="absolute top-0 left-0 w-20 h-20 opacity-10" />
                <img src="images/shape-06.svg" alt="Shape" className="absolute bottom-0 right-0 w-20 h-20 opacity-10" />

                <div className="space-y-6">
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Email Address</h4>
                        <p><a href="mailto:support@startup.com" className="text-blue-600 hover:underline">support@startup.com</a></p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Office Location</h4>
                        <p>76/A, Green valle, Califonia USA.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Phone Number</h4>
                        <p><a href="tel:+00987543433223" className="text-blue-600 hover:underline">+009 8754 3433 223</a></p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800">Skype Email</h4>
                        <p><a href="mailto:example@yourmail.com" className="text-blue-600 hover:underline">example@yourmail.com</a></p>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Social Media</h4>
                    <ul className="flex space-x-4">
                        {[
                            { icon: 'facebook', path: 'M6.83366 11.3752H9.12533L10.042 7.7085...' },
                            { icon: 'twitter', path: 'M19.3153 2.18484C18.6155 2.49440...' },
                            { icon: 'linkedin', path: 'M4.36198 2.58327C4.36174 3.0695...' },
                            { icon: 'youtube', path: 'M6.82308 0.904297C7.40883 0.904297...' },
                        ].map((social, index) => (
                            <li key={index}>
                                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
