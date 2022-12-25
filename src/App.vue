<template>
  <div id="app">

    <!-- navbar -->
    <header class="bg-transparent top-0 left-0 absolute w-full flex items-center z-10 scroll-smooth" :class="{navbarFixed : showNavbar}">
      <div class="container">
        <div class="flex justify-between items-center relative">
          <div class="px-4">
            <a href="#home" class="py-6 font-bold block text-primary text-lg">TioPrananda</a>
          </div>
          <div class="px-4 flex items-center">
            <button type="button" id="burger" class="block absolute right-4 lg:hidden lg:absolute lg:right-4" :class="{active : isActive}" @click="buttonToggle" name="burger">
              <span class="burger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span class="burger-line transition duration-300 ease-in-out"></span>
              <span class="burger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav id="nav-menu" 
            class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" :class="{hidden : isNonActive}" @click="buttonToggle">
              <ul class="block lg:flex">
                <li class="group"><a href="#home" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Home</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#about" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >About</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#projects" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Projects</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#contact" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section id="home" class="pt-36 lg:pt-1">
      <div class="container">
        <div class="flex flex-wrap">

          <!-- kolom 1 : front profil -->
          <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="semi-bold text-base text-primary md:text-3xl lg:text-2xl">Hi!, my name is 
              <span class="block font-bold text-slate-900 text-4xl mt-1 text-dark md:text-6xl lg:text-5xl">Tio Prananda</span></h1>
            <h2 class="text-slate-500 mt-1 font-medium text-lg mb-5">Front End Web Developer</h2>
           <a href="#contact">  <button class="text-white py-3 px-8 text-base font-semibold bg-primary rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact me</button></a>
          
          </div>

          <!-- kolom 2 : photo -->
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-1 lg:mt-1 lg:right-0">
              <img class="max-w-full mx-auto sepia-[.4]" src="./assets/tio-removebg-preview.png" alt="tio"/>
              <span class="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 scale-125">
                <!-- <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6" d="M34.6,-55.4C46.1,-53.3,57.6,-46.6,59,-36.6C60.3,-26.6,51.4,-13.3,53.3,1.1C55.1,15.4,67.6,30.8,62.9,35C58.2,39.1,36.3,32,22.9,37.9C9.6,43.8,4.8,62.6,-0.1,62.7C-5,62.9,-9.9,44.3,-19.2,36.1C-28.5,27.9,-42.1,30,-46.2,25.7C-50.3,21.4,-44.9,10.7,-42.8,1.2C-40.8,-8.3,-42.1,-16.7,-41.9,-27.8C-41.7,-38.8,-40,-52.6,-32.8,-57.2C-25.6,-61.8,-12.8,-57.2,-0.6,-56.1C11.5,-55.1,23.1,-57.5,34.6,-55.4Z" transform="translate(100 100)" />
              </svg> -->
              <img src="./assets/bgtio2.png" class="bg-blend-overlay hue-rotate-60 sepia" width="600" height="600" alt="bg">
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="pt-36 pb-32">
      <div class="container">
        <div class="flex flex-wrap">

            <!-- kolom 3 : about -->
            <div class="w-full px-4 mb-10 lg:w-1/2">
              <h4 class="font-bold text-primary text-lg uppercase mb-3 text-center">About Me</h4>
              <p class="font-medium text-base text-secondary max-w-xl lg:text-lg lg:text-center">Hello, I'm a front-end web developer who loves to create my own world through programming. I love to create modular code and easy to maintain code, and documented in the form of comments that makes it easier for other teams to manage.
              </p>
            </div>

            <!-- kolom 4 : follow me -->
            <div class="w-full px-4 lg:w-1/2">
              <h4 class="font-bold text-primary text-lg uppercase mb-3 text-center">Follow Me</h4>
              <div class="flex items-center justify-center">
                <!-- linked in -->
                <a href="" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <!-- instagram -->
                <a href="https://www.instagram.com/prndtio/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <!-- facebook -->
                <a href="https://www.facebook.com/tio.prananda.5" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <!-- twitter -->
                <a href="" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width='20' class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <!-- youtube -->
                <a href="https://www.youtube.com/@tioprananda6234" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <!-- github -->
                <a href="https://github.com/tioprananda" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>
              <p class="text-secondary text-center mb-3 mt-3">email : prananda.tio@gmail.com | phone : (+62) 887 4250 5256</p>
              
            </div>
          </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="pb-36 pt-36 bg-slate-100">
      <div class="container">

        <!-- judul prpject -->
        <div class="w-full px-4 ">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-bold text-primary text-lg uppercase mb-2">Projects</h4>
          </div>
        </div>

        <!-- gambar projecct -->
        <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div class="mb-12 p-4 md:w-1/2">
            <h3 class="font-semibold text-lg text-dark mt-3 mb-3 hover:text-primary transition"><a href="#home" target="_blank">Landing Page Tio Prananda</a></h3>
            <div class="rounded-md shadow-md overflow-hidden mt-3 mb-3">
              <a href="#home">
                <img src="./assets/landingtio.png" alt="e-commerce" width="w-full"></a>
            </div>
            <div class="container">
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="flex items-center justify-center">
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <p class="font-medium text-base text-secondary">My portofolio website, made by tailwindcss and vue js.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <h3 class="font-semibold text-lg text-dark mt-3 mb-3 hover:text-primary transition"><a href="https://elfshop.netlify.app/" target="_blank">Elfs-Shop Shopping Cart</a></h3>
            <div class="rounded-md shadow-md overflow-hidden mt-3 mb-3">
              <a href="https://elfshop.netlify.app/" target="_blank">
                <img src="./assets/elfshop.png" alt="e-commerce" width="w-full"></a>
            </div>

            <div class="container">
              <div class="flex flex-wrap">
                <div class="w-full px-4">
                  <div class="flex items-center justify-center">
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vue.js</title><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>
                    <svg role="img" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bootstrap</title><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <p class="font-medium text-base text-secondary">Build with bootstrap 5 and vue js. website for manage cart products. i also build the backend with fake api using json placeholders. </p>
          </div>
          
        </div>
      </div>
    </section>

    <!-- contact -->
    <section id="contact" class="pt-36 pb-32">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-bold text-primary text-lg uppercase mb-2">Contact</h4>
          </div>
        </div>
        <form>
          <div class="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label for="name" class="text-base font-bold text-primary">Name</label>
            <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
          </div>
          <div class="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label for="email" class="text-base font-bold text-primary">Email</label>
            <input type="email" id="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
          </div>
          <div class="w-full px-4 mb-8 lg:w-2/3 lg:mx-auto">
            <label for="message" class="text-base font-bold text-primary">Message</label>
            <textarea type="textarea" id="message" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" />
          </div>
          <div class="w-full px-4 lg:w-2/3 lg:mx-auto">
            <button class="bg-primary text-base py-3 px-8 rounded-full font-semibold text-white w-full hover:opacity-80 hover:shadow-lg transition duration-500">Send</button>
          </div>
        </form>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-dark pt-24 pb-12">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-12 text-slate-300 md:w-1/2">
            <h3 class="font-bold text-2xl text-white mb-2">Contact Me</h3>
            <p>prananda.tio@gmail.com</p>
            <p>(+62) 887 4250 5356</p>
          </div>
          <div class="w-full px-4 mb-12 md:w-1/2">
            <h3 class="font-semibold text-2xl text-white mb-2 ">Links</h3>
            <ul class="text-slate-300">
              <li>
                <a href="#home" class="inline-block text-base hover:text-primary mb-3">Home</a>
              </li>
              <li>
                <a href="#about" class="inline-block text-base hover:text-primary mb-3">About</a>
              </li>
              <li>
                <a href="#projects" class="inline-block text-base hover:text-primary mb-3">Projects</a>
              </li>
              <li>
                <a href="#contact" class="inline-block text-base hover:text-primary mb-3">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t w-full border-slate-700 pt-10">
          <div class="flex items-center justify-center mb-5">
                <!-- linked in -->
                <a href="" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <!-- instagram -->
                <a href="https://www.instagram.com/prndtio/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <!-- facebook -->
                <a href="https://www.facebook.com/tio.prananda.5" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <!-- twitter -->
                <a href="" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width='20' class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <!-- youtube -->
                <a href="https://www.youtube.com/@tioprananda6234" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                    <!-- github -->
                    <a href="https://github.com/tioprananda" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white">
                  <svg role="img" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
          </div>
          <p class="font-medium text-sm text-center text-slate-500"> <span class="text-1xl">© </span>COPYRIGHT TIO PRANANDA - 2022</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
     isActive : false,
     isNonActive : true,
     showNavbar: false,
     lastScrollPosition: 0
    }
  },
  methods : {

  // event toggle true false
   buttonToggle(){
    if(!this.isActive){
      this.isActive = true;
      this.isNonActive = false;
    } else {
      this.isActive = false;
      this.isNonActive = true;
    }
   },

// event ketika window di scroll
onScroll () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScrollPosition > fixedNav ){
    this.showNavbar = true;
  } else {
    this.showNavbar = false;
  }
}

   

    

  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
#app {

}
</style>
