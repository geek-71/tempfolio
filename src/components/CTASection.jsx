import React from 'react'

function CTASection() {
  return (
    <section class="relative overflow-hidden bg-white py-16">
  {/* <!-- Bg Shape --> */}
  <img class="absolute top-0 left-0 w-full h-auto z-0" src="images/shape-16.svg" alt="Bg Shape" />

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="w-full md:w-1/2 animate-fade-in-left">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Join with 5000+ Startups Growing with Base.
        </h2>
        <p class="text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur leo. Ut venenatis rhoncus.
        </p>
      </div>
      <div class="w-full md:w-auto animate-fade-in-right">
        <a href="#" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Get Started Now
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default CTASection
