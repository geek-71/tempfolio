import React from 'react'

function Services() {
    return (
        <section class="py-16 bg-gray-50">
            {/* <!-- Section Title Start --> */}
            <h2 x-text="sectionTitle" class="text-3xl sm:text-4xl font-bold leading-snug text-gray-900 mb-6 text-center">
                We Offer The Best Quality Service for You
            </h2>

            <div>
                <div class="max-w-4xl mx-auto text-center mb-12 animate__animated animate__fadeInUp">
                    <h2
                        x-text="sectionTitle"
                        class="text-3xl sm:text-4xl font-bold leading-snug text-gray-900 mb-4"
                    ></h2>
                    <p x-text="sectionTitleText" class="text-gray-600 text-lg"></p>
                </div>
            </div>
            {/* <!-- Section Title End --> */}

            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-04.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">Crafted for Startups</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    {/* <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-05.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">High-quality Design</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>
                    {/* 
      <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-06.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">All Essential Sections</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    {/* <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-07.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">Speed Optimized</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    {/* <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-05.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">Fully Customizable</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                    {/* <!-- Service Item --> */}
                    <div class="text-center p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
                        <img src="images/icon-06.svg" alt="Icon" class="mx-auto mb-4" />
                        <h4 class="text-xl font-semibold text-gray-800 mb-2">Regular Updates</h4>
                        <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Services