import React from 'react'

function About() {
  return (
    <section class="py-16 2xl:py-35 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-10">
      
      {/* <!-- About Images --> */}
      <div class="flex-1 animate__animated animate__fadeInLeft space-y-4">
        <div class="relative space-x-2">
          <img src="images/shape-05.svg" alt="Shape" class="absolute -left-5 top-0" />
          <img src="images/about-01.png" alt="About" class="inline-block" />
          <img src="images/about-02.png" alt="About" class="inline-block" />
        </div>
        <div class="relative space-x-2">
          <img src="images/shape-06.svg" alt="Shape" class="inline-block" />
          <img src="images/about-03.png" alt="About" class="inline-block rounded-lg shadow-lg" />
          <img src="images/shape-07.svg" alt="Shape" class="absolute bottom-0 left-0" />
        </div>
      </div>

      {/* <!-- About Content --> */}
      <div class="flex-1 animate__animated animate__fadeInRight">
        <h4 class="text-sm font-semibold text-blue-600 uppercase mb-2">Why Choose Us</h4>
        <h2 class="text-3xl lg:text-4xl font-bold leading-snug mb-4 text-gray-900">
          We Make Our Customers Happy by Giving Best Services.
        </h2>
        <p class="text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
        </p>
        <a href="https://www.youtube.com/watch?v=xcJtL7QggTI" data-fslightbox class="inline-flex items-center gap-3 text-blue-600 hover:text-blue-800 transition">
          <span class="relative w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow">
            <span class="absolute inset-0 rounded-full animate-ping bg-blue-200 z-[-1]"></span>
            <img src="images/icon-play.svg" alt="Play" class="w-6 h-6" />
          </span>
          <span class="font-semibold uppercase">See How We Work</span>
        </a>
      </div>

    </div>
  </div>
</section>
  )
}

export default About