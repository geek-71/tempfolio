function Hero() {
  return (
 <section class="container mx-auto px-4 py-12 flex flex-col-reverse lg:flex-row items-center gap-10">
  {/* <!-- Hero Content --> */}
  <div class="w-full lg:w-1/2">
    <div class="text-left">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        We specialize in UI/UX, Web Development, Digital Marketing.
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus
        consequat varius nisi quis, posuere magna.
      </p>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <a
          href="#"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started Now
        </a>
        <div>
          <a href="#" class="text-blue-600 font-semibold text-lg block">
            Call us (0123) 456 – 789
          </a>
          <span class="text-gray-500 text-sm">For any question or concern</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Hero Images --> */}
  <div class="w-full lg:w-1/2 relative flex justify-center items-center">
    {/* <!-- Optional layered shapes --> */}
    <img src="images/shape-01.svg" alt="shape" class="hidden 2xl:block absolute -left-10 top-0 w-32" />
    <img src="images/shape-02.svg" alt="shape" class="hidden 2xl:block absolute top-10 right-10 w-24" />
    <img src="images/shape-03.svg" alt="shape" class="hidden 2xl:block absolute bottom-10 left-10 w-20" />
    <img src="images/shape-04.svg" alt="shape" class="absolute w-64 h-auto" />
    <img src="images/hero.png" alt="Woman" class="relative z-10 w-full max-w-md" />
  </div>
</section>


  
  )
}

export default Hero