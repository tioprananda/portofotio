<template>
  <div id="app" class="bg-primary font-inter">

    <!-- navbar -->
    <header class="bg-transparent py-3 lg:py-0 absolute w-full flex items-center z-10 transition ease-in-out duration-500 scroll-smooth fixed z-[9999]" :class="{navbarFixed : showNavbar}">
      <div class="container">
        <div class="flex justify-between items-center relative">
          <div class="px-4 py-6 lg:py-0 flex items-center">
            <button type="button" id="burger" class="block absolute right-4 lg:hidden lg:absolute lg:right-4" :class="{active : isActive}" @click="buttonToggle" name="burger">
              <span class="burger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span class="burger-line transition duration-300 ease-in-out"></span>
              <span class="burger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav id="nav-menu" 
            class="lg:fixed lg:top-[40%] lg:w-[10%] lg:left-10 lg:bg-transparent absolute lg:font-neue lg:flex lg:flex-wrap py-5 transition ease-in-out duration-500 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:flex lg:static lg:max-w-full lg:shadow-none lg:rounded-none lg:opacity-100" :class="{'opacity-0' : isNonActive}" @click="buttonToggle">
              <ul class="block w-full lg:py-2.5">
                <li class="group"><a href="#home" class="text-base text-dark lg:text-text mx-8 py-2 transition ease-in-out duration-300 flex lg:text-2xl lg:hover:text-white lg:hidden" >Home</a></li>
              </ul>
              <ul class="block w-full lg:py-2.5">
                <li class="group"><a href="#projects" class="text-base text-dark lg:text-text mx-8 py-2 hover:text-primary flex lg:text-2xl lg:hover:text-white lg:border-solid lg-border-div lg:border-b lg:w-[25%] lg:hover:w-[50%]" >Projects</a></li>
              </ul>
              <ul class="block w-full lg:py-2.5">
                <li class="group"><a href="#gallery" class="text-base text-dark lg:text-text mx-8 py-2 hover:text-primary flex lg:text-2xl lg:hover:text-white lg:border-solid lg-border-div lg:border-b lg:w-[25%] lg:hover:w-[50%]" >Gallery</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <!-- Home -->
    <section id="home" class="pt-24 lg:pt-12 lg:fixed lg:right-1/2 left-10 lg:z-10">
      <div class="container">
        <div class="flex flex-wrap">
          <!-- kolom 1 : front profil -->
          <div class="w-full self-center">
            <h1><span class="block font-bold text-white text-5xl text-dark md:text-6xl lg:text-5xl font-neue font-">Tio Prananda</span></h1>
            <h2 class="text-white font-medium text-2xl mb-4 font-neue">Front End Programmer</h2>
            <h3 class="text-text mb-4 text-base text-justify mt-28 transition ease-in-out duration-[1000ms]" ref="home" :class="paraHome">Hello, I'm a front-end developer who loves to create my own world through programming. I love to create modular code and easy to maintain code, and documented in the form of comments that makes it easier for other teams to manage. <br>
            </h3>
            <div class="flex justify-center my-11  transition ease-in-out duration-[1000ms] lg:fixed -bottom-[105px] left-[520px] z-20" ref="home" :class="paraHome">
              <a href="https://drive.google.com/file/d/1H3EvZvBYvDUMLJdvXCpDITZPVby7TDb4/view" target="_blank" class="block my-auto"> <button class="bg-text items-center rounded-full w-28 h-10  transition ease-in-out duration-300 shadow-md shadow-black hover:bg-white"><span class="text-center text-sm font-neue p-3">Download CV</span></button></a>
            </div>

              <div class="lg:mt-[330px] flex items-center justify-start my-3  transition ease-in-out duration-[1000ms]" ref="home" :class="paraHome">
                        <!-- foto -->
                        <img src="./assets/profil.jpg" alt="" class="w-16 items-center rounded-full mr-5 grayscale">
                     
                      <div class="w-5/6 flex-wrap">
                         <!-- facebok dan gihub -->
                       <div class="w-full flex items-center justify-start">
                              <!-- facebook -->
                              <a href="https://www.facebook.com/tio.prananda.5" target="_blank" class="flex w-60 mr-3 text-white">
                                <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                <p class="text-sm mx-3 font-light my-auto">Facebook</p>
                                <svg fill="none" width="17" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" class="stroke-current"><path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path><path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path></svg>
                              </a>
                            <!-- github -->
                            <a href="https://github.com/tioprananda" target="_blank" class="flex w-full text-white">
                                <svg viewBox="0 0 24 24" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill="#ffffff"></path> </g></svg>
                                <p class="text-sm mx-3 font-light my-auto">GitHub</p>
                                <svg fill="none" width="17" stroke="currentColor" viewBox="0 0 12 12" aria-hidden="true" class="stroke-current"><path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path><path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path></svg>
                              </a>
                       </div>  
                         <!-- email wa -->
                         <div class=" w-full flex items-center justify-start gap-5 text-text">
                          <!-- whatsap.icon -->
                          <div class="w-60 flex mr-3">
                            <svg fill="#ffffff" viewBox="0 0 32 32" class="mr-1" width="13" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
                          <p class="text-xs text-light">0887 4250 5356</p>
                          </div>

                          <!-- email.icon -->
                          <div class="w-full flex mr-2">
                            <svg fill="#ffffff" width="12" class="mr-1" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g></svg>
                          <p class="text-xs text-light">prananda.tio@gmail.com</p>
                          </div>
                        </div>
                      </div>

              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- project dan galler -->
    <div class="flex flex-wrap justify-end lg:p-10">
      <div class="w-96 h-full"></div>
    <!-- Projects -->
    <section id="projects" class="pt-5 w-full md:pt-5 lg:w-1/2">
      <div class="container">

        <!-- judul prpject -->
        <div class="w-full">
          <div class="max-w-xl mx-auto text-start">
            <h4 class="text-white text-2xl mb-6 font-neue">Projects</h4>
          </div>
        </div>

       <div class="flex w-full mt-10 flex-wrap gap-5">
        
          <!-- konten app.kasir.v1.0 -->
         <div class="w-full flex flex-wrap justify-center bg-div mt-28 transition ease-in-out duration-[1000ms]" ref="projects" :class="paraProjects">
          <div class=" w-full h-60 p-8">
             <!-- svg icon program -->
             <div class="flex items-center gap-2 justify-start text-white">
                  <!-- html.icon -->
                  <svg fill="#ffffff" width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html5</title> <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path> </g></svg>

                  <!-- css.icon -->
                  <svg fill="#ffffff"  width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg>

                  <!-- jvascipr.icon -->
                  <svg fill="#ffffff"  width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>javascript</title> <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path> </g></svg>

                  <!-- bootstrap.icon -->
                  <svg viewBox="0 0 24 24"  width="15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#000000"></path> </g></svg>

                  <svg fill="#ffffff" viewBox="0 0 32 32" width="15" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.531 15.573c-1.385-2.417-1.667-4.672-0.682-6.375 1.318-2.286 4.625-3.083 8.807-2.323 0.24 0.036 0.406 0.266 0.365 0.505-0.047 0.24-0.281 0.396-0.521 0.339-3.865-0.703-6.813 0.010-7.906 1.906-0.807 1.396-0.568 3.344 0.682 5.521 0.13 0.208 0.063 0.479-0.151 0.604-0.214 0.12-0.484 0.042-0.594-0.177zM23.422 7.479c2.448 0.031 4.208 0.792 5.005 2.167 1.094 1.891 0.24 4.792-2.292 7.781-0.172 0.182-0.156 0.469 0.031 0.625 0.188 0.161 0.474 0.13 0.62-0.068 2.74-3.234 3.698-6.49 2.38-8.766-0.969-1.677-3.010-2.563-5.729-2.599-0.245-0.016-0.458 0.177-0.458 0.427-0.005 0.245 0.198 0.443 0.448 0.432zM20.953 27.797c-0.203-0.12-0.469-0.057-0.589 0.146-1.245 2.073-2.776 3.198-4.349 3.198-2.188 0-4.276-2.193-5.599-5.891-0.073-0.229-0.328-0.354-0.552-0.271-0.229 0.083-0.344 0.339-0.255 0.563 1.427 3.995 3.771 6.458 6.406 6.458 1.917 0 3.693-1.307 5.083-3.615 0.12-0.203 0.057-0.464-0.146-0.589zM30.76 24.339c-0.005 1.672-1.891 2.635-3.25 1.667-3.271 1.927-9.526 0.948-15.411-2.453-2.505-1.448-4.703-3.188-6.396-5.047-0.167-0.172-0.161-0.453 0.021-0.62 0.177-0.161 0.458-0.146 0.615 0.042 1.63 1.792 3.755 3.479 6.187 4.88 5.557 3.208 11.406 4.161 14.396 2.542-0.667-1.172-0.042-2.656 1.26-3 1.307-0.344 2.583 0.641 2.578 1.99zM5.344 24.339c0.005 1.589-1.724 2.578-3.094 1.771-1.37-0.802-1.344-2.797 0.047-3.563-0.313-3.839 3.719-8.979 9.813-12.5 2.531-1.458 5.167-2.495 7.641-3.026 0.531-0.073 0.693 0.688 0.182 0.839-2.385 0.51-4.938 1.516-7.396 2.932-5.734 3.313-9.526 8.089-9.396 11.505 0.052-0.005 0.099-0.010 0.151-0.010 1.135 0 2.052 0.922 2.052 2.052zM13.964 2.052c0.094-2.635 4.010-2.635 4.104 0 0 0.031-0.005 0.063-0.005 0.089 3.401 1.76 5.76 7.75 5.76 14.672 0 2.849-0.396 5.578-1.141 7.948-0.063 0.234-0.307 0.375-0.542 0.302s-0.359-0.328-0.276-0.557c0.714-2.286 1.099-4.932 1.099-7.693 0-6.521-2.167-12.125-5.125-13.818-0.99 1.911-3.88 1.208-3.875-0.943zM15.703 15.359c-0.802 0.177-1.313 0.964-1.141 1.766s0.964 1.313 1.766 1.141c1.938-0.417 1.307-3.323-0.625-2.906z"></path> </g></svg>

                  <!-- nodejs -->
                  <svg viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>nodejs</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,1.85a1.62,1.62,0,0,0-.78.2L3.78,6.35A1.58,1.58,0,0,0,3,7.71v8.58a1.58,1.58,0,0,0,.78,1.36l2,1.12a3.24,3.24,0,0,0,1.71.47,2.07,2.07,0,0,0,2.21-2.33V8.44a.22.22,0,0,0-.22-.22H8.5a.22.22,0,0,0-.23.22v8.47c0,.66-.68,1.31-1.77.76l-2-1.17a.26.26,0,0,1-.11-.21V7.71a.24.24,0,0,1,.11-.21l7.44-4.29a.22.22,0,0,1,.22,0L19.55,7.5a.24.24,0,0,1,.11.21v8.58a.26.26,0,0,1-.11.21l-7.44,4.29a.24.24,0,0,1-.23,0L10,19.65a.26.26,0,0,0-.21,0,4.22,4.22,0,0,1-1.12.51c-.12,0-.31.11.07.32l2.48,1.47a1.55,1.55,0,0,0,1.56,0l7.44-4.29A1.58,1.58,0,0,0,21,16.29V7.71a1.58,1.58,0,0,0-.78-1.36l-7.44-4.3a1.59,1.59,0,0,0-.78-.2M14,8c-2.12,0-3.39.89-3.39,2.39s1.26,2.08,3.3,2.28c2.43.24,2.62.6,2.62,1.08,0,.83-.67,1.18-2.23,1.18-2,0-2.4-.49-2.55-1.47a.23.23,0,0,0-.22-.18h-1a.21.21,0,0,0-.21.22c0,1.24.68,2.74,3.94,2.74,2.35,0,3.7-.93,3.7-2.55s-1.08-2-3.37-2.34-2.54-.46-2.54-1,.2-1,1.91-1c1.5,0,2.09.33,2.32,1.36a.21.21,0,0,0,.21.17h1a.19.19,0,0,0,.15-.07.16.16,0,0,0,.05-.16C17.56,8.82,16.38,8,14,8Z"></path> </g></svg>

                  <svg fill="#ffffff" viewBox="0 0 32 32" width="15" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sqlite</title> <path d="M4.884 2.334c-1.265 0.005-2.289 1.029-2.293 2.294v20.754c0.004 1.264 1.028 2.288 2.293 2.292h11.769c-0.056-0.671-0.088-1.452-0.088-2.241 0-0.401 0.008-0.801 0.025-1.198l-0.002 0.057c-0.008-0.077-0.014-0.176-0.020-0.25q-0.229-1.498-0.591-2.972c-0.119-0.504-0.277-0.944-0.478-1.36l0.017 0.039c-0.080-0.126-0.127-0.279-0.127-0.443 0-0.034 0.002-0.068 0.006-0.101l-0 0.004c0.003-0.173 0.020-0.339 0.049-0.501l-0.003 0.019c0.088-0.523 0.19-0.963 0.314-1.394l-0.022 0.088 0.271-0.035c-0.021-0.044-0.018-0.081-0.039-0.121l-0.051-0.476q0.224-0.751 0.477-1.492l0.25-0.024c-0.010-0.020-0.012-0.047-0.023-0.066l-0.054-0.395c1.006-4.731 3.107-8.864 6.029-12.272l-0.031 0.037c0.082-0.086 0.166-0.16 0.247-0.242zM28.094 1.655c-1.29-1.15-2.849-0.687-4.39 0.68q-0.356 0.319-0.684 0.669c-2.8 3.294-4.843 7.319-5.808 11.747l-0.033 0.18c0.261 0.551 0.494 1.201 0.664 1.876l0.016 0.075q0.115 0.436 0.205 0.878s-0.024-0.089-0.12-0.37l-0.062-0.182q-0.019-0.050-0.041-0.1c-0.172-0.4-0.647-1.243-0.857-1.611-0.179 0.529-0.337 1.022-0.47 1.47 0.413 0.863 0.749 1.867 0.959 2.917l0.014 0.083s-0.031-0.124-0.184-0.552c-0.342-0.739-0.664-1.338-1.015-1.919l0.050 0.089c-0.185 0.464-0.292 1.001-0.292 1.564 0 0.1 0.003 0.199 0.010 0.297l-0.001-0.013c0.219 0.426 0.401 0.921 0.519 1.439l0.008 0.043c0.357 1.375 0.606 3.049 0.606 3.049l0.021 0.28c-0.015 0.342-0.023 0.744-0.023 1.147 0 0.805 0.034 1.602 0.101 2.39l-0.007-0.103c0.058 1.206 0.283 2.339 0.651 3.406l-0.026-0.086 0.194-0.105c-0.346-1.193-0.545-2.564-0.545-3.981 0-0.344 0.012-0.684 0.035-1.022l-0.003 0.046c0.221-3.782 0.964-7.319 2.158-10.641l-0.083 0.264c1.655-4.9 4.359-9.073 7.861-12.417l0.012-0.011c-2.491 2.249-5.863 9.535-6.873 12.232-0.963 2.42-1.798 5.294-2.365 8.263l-0.048 0.305c0.664-1.639 1.914-2.926 3.483-3.622l0.042-0.017s1.321-1.63 2.864-3.956c-1.195 0.25-2.184 0.521-3.15 0.843l0.199-0.057c-0.75 0.314-0.952 0.421-0.952 0.421 1.288-0.791 2.777-1.515 4.337-2.092l0.178-0.058c2.867-4.515 5.991-10.929 2.845-13.736z"></path> </g></svg>
                
              </div>
            <h3 class="text-white text-2xl font-medium my-3">Cashier Desktop App</h3>
            <p class="text-sm text-text text-justify h-20">desktop-based cashier application. There are User Login Management features, CSV and PDF print data. This application can detect barcodes with a barcode scanner tool.</p>
              <div class="flex justify-end w-full">
                <!-- button source -->
                <button class="bg-text rounded-full w-28 h-10 transition ease-in-out duration-300 shadow-md shadow-black text-center text-xs font-light hover:bg-white"><a href="https://github.com/tioprananda/appkasir" target="_blank">Source Code</a></button>
                </div>
          </div> 
        </div>

         <!-- konten web e-commercs -->
         <div class="w-full flex flex-wrap justify-center bg-div transition ease-in-out duration-[2000ms]" ref="projects" :class="paraProjects">
          <div class=" w-full h-60 p-8">
             <!-- svg icon program -->
             <div class="flex items-center gap-2 justify-start text-white">
                  <!-- html.icon -->
                  <svg fill="#ffffff" width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>html5</title> <path d="M11.677 13.196l-0.289-3.387 12.536 0.004 0.287-3.268-16.421-0.004 0.87 9.983h11.374l-0.406 4.27-3.627 1.002-3.683-1.009-0.234-2.63h-3.252l0.411 5.198 6.757 1.807 6.704-1.798 0.927-10.166h-11.954zM2.914 1.045h26.172l-2.38 26.874-10.734 3.037-10.673-3.038z"></path> </g></svg>

                  <!-- css.icon -->
                  <svg fill="#ffffff"  width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>css3</title> <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path> </g></svg>

                  <!-- jvascipr.icon -->
                  <svg fill="#ffffff"  width="15" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>javascript</title> <path d="M17.313 14.789h-2.809c0 2.422-0.011 4.829-0.011 7.254 0.033 0.329 0.051 0.712 0.051 1.099 0 0.81-0.081 1.601-0.236 2.365l0.013-0.076c-0.412 0.861-1.475 0.751-1.957 0.6-0.451-0.242-0.808-0.609-1.031-1.055l-0.006-0.014c-0.044-0.094-0.097-0.174-0.16-0.246l0.001 0.001-2.281 1.406c0.367 0.79 0.934 1.434 1.637 1.885l0.018 0.011c0.763 0.427 1.675 0.678 2.645 0.678 0.484 0 0.954-0.063 1.401-0.18l-0.038 0.009c0.988-0.248 1.793-0.89 2.254-1.744l0.009-0.019c0.359-0.914 0.566-1.973 0.566-3.080 0-0.388-0.026-0.77-0.075-1.145l0.005 0.044c0.015-2.567 0-5.135 0-7.722zM28.539 23.843c-0.219-1.368-1.11-2.518-3.753-3.59-0.92-0.431-1.942-0.731-2.246-1.425-0.063-0.158-0.099-0.341-0.099-0.532 0-0.124 0.015-0.244 0.044-0.359l-0.002 0.010c0.208-0.55 0.731-0.935 1.343-0.935 0.199 0 0.388 0.040 0.559 0.113l-0.009-0.004c0.552 0.19 0.988 0.594 1.215 1.112l0.005 0.013c1.292-0.845 1.292-0.845 2.193-1.406-0.216-0.369-0.459-0.689-0.734-0.977l0.002 0.002c-0.767-0.814-1.852-1.32-3.056-1.32-0.171 0-0.34 0.010-0.505 0.030l0.020-0.002-0.881 0.111c-0.856 0.194-1.587 0.639-2.133 1.252l-0.003 0.004c-0.535 0.665-0.859 1.519-0.859 2.449 0 1.279 0.613 2.415 1.56 3.131l0.010 0.007c1.706 1.275 4.2 1.555 4.519 2.755 0.3 1.462-1.087 1.931-2.457 1.762-0.957-0.218-1.741-0.83-2.184-1.652l-0.009-0.017-2.287 1.313c0.269 0.536 0.607 0.994 1.011 1.385l0.001 0.001c2.174 2.194 7.61 2.082 8.586-1.255 0.113-0.364 0.178-0.782 0.178-1.215 0-0.3-0.031-0.593-0.091-0.875l0.005 0.028zM1.004 1.004h29.991v29.991h-29.991z"></path> </g></svg>

                  <!-- bootstrap.icon -->
                  <svg viewBox="0 0 24 24"  width="15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#000000"></path> </g></svg>
                  <!-- vue.js -->
                  <svg viewBox="0 0 24 24" width="15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.1143 2H15L12 6.9L9.42857 2H0L12 23L24 2H19.1143ZM3 3.75H5.91429L12 14.6L18.0857 3.75H21L12 19.5L3 3.75Z" fill="#000000"></path> </g></svg>
                  <!-- api.icn -->
                  <svg viewBox="0 0 16 16" width="15"  xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.253 2.782l-1.11-.273a4.021 4.021 0 00-.593 1.025l.79.825a3.005 3.005 0 000 1.282l-.79.825c.147.372.348.717.593 1.025l1.11-.273c.315.288.693.509 1.109.641l.318 1.097a3.999 3.999 0 001.185 0l.318-1.097a2.985 2.985 0 001.11-.641l1.11.273c.245-.308.446-.653.593-1.025l-.792-.825a3.005 3.005 0 000-1.282l.792-.825a4.021 4.021 0 00-.593-1.025l-1.11.273a2.985 2.985 0 00-1.11-.641l-.318-1.097a3.985 3.985 0 00-1.185 0l-.318 1.097a2.982 2.982 0 00-1.11.641zM12.273 5a1 1 0 11-2 0 1 1 0 012 0z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.915 6.264A4.54 4.54 0 005.7 6.04l-.445.918a3.588 3.588 0 00-1.364.37l-.85-.564c-.345.226-.66.499-.932.81l.44.92c-.27.391-.462.833-.56 1.298l-.971.312a4.51 4.51 0 00.051 1.233l.995.23c.136.456.363.88.665 1.248l-.362.954c.298.287.632.532.996.728l.8-.633a3.58 3.58 0 001.39.257l.521.877c.409-.053.81-.162 1.19-.324l.004-1.02a3.58 3.58 0 001.067-.927l1.01.14c.215-.353.38-.735.49-1.133l-.796-.639a3.61 3.61 0 00-.058-1.413l.739-.701a4.508 4.508 0 00-.581-1.09l-.995.224a3.588 3.588 0 00-1.141-.834l-.088-1.017zm-1.15 2.82a1.477 1.477 0 11-.538 2.904 1.477 1.477 0 01.539-2.905z" fill="#000000"></path> </g></svg>
              </div>
            <h3 class="text-white text-2xl font-medium my-3">Web E-Commerce</h3>
            <p class="text-sm text-text text-justify h-20">Website online shop for manage cart products. i also build the backend rest API using json placeholders.</p>
              <div class="flex justify-end gap-2 w-full">
                <!-- button source -->
                <button class="bg-text rounded-full w-28 h-10 transition ease-in-out duration-300 shadow-md shadow-black text-center text-xs font-light hover:bg-white"><a href="https://elfshop.netlify.app/" target="_blank">Preview</a></button>
                <button class="bg-text rounded-full w-28 h-10 transition ease-in-out duration-300 shadow-md shadow-black text-center text-xs font-light hover:bg-white"><a href="https://github.com/tioprananda/elfshop" target="_blank">Source Code</a></button>
                </div>
          </div> 
        </div>
       </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="w-full relative pt-5 md:pt-5 lg:w-1/2">
      <div class="container lg-container-fluid">

        <!-- judul galley -->
        <div class="w-full">
          <div class="max-w-xl mx-auto text-start">
            <h4 class="text-white text-2xl mb-6 font-neue">Gallery</h4>
          </div>
        </div>

       <div class="flex w-full mt-36 flex-wrap gap-5 xl:gap-2">
          <!-- konten app.kasir.v1.0 -->
          <div class="relative w-full h-full transition ease-in-out duration-[1000ms] md:w-full lg:w-full xl:w-[49%] hover:z-10" ref="kasirGallery" :class="paraGallery">
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden lg:overflow-visible bg-div lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/kasir/1.login.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center te lg:text-xsxt-sm p-1 m-auto lg:text-xs">cashier desktop app - login form</h1></div>
            </div>
        </div>
           <div class="relative w-full h-full transition ease-in-out duration-[2000ms] lg:w-full xl:w-[49%] hover:z-10 lg:mt-10"  ref="kasirGallery" :class="paraGallery">
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
               <img src="./assets/kasir/2.home.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - home page</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[3000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300 ">
              <img src="./assets/kasir/3.produk.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - products menu</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[4000ms] lg:w-full xl:w-[49%] hover:z-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300 ">
              <img src="./assets/kasir/4.kasir.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - cashier menu</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[5000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/kasir/5.datapenjualan.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - sales data menu</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[6000ms] lg:w-full xl:w-[49%] hover:z-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300 ">
              <img src="./assets/kasir/6.laporanpenjualan.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - sales report menu</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[7000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/kasir/7.grafik.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - grafik menu</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/kasir/8.customer.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">cashier desktop app - customer menu</h1></div>
            </div>
        </div>

        <!-- e-commerce gallery -->
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/elfshop/0.elfslogin.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">e-commerce : login form</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10 -xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/elfshop/1.elfshome.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">e-commerce : home</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/elfshop/3.elfsproduk.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">e-commerce : products</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10 -xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/elfshop/4.cart.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">e-commerce : cart</h1></div>
            </div>
        </div>
        <div class="relative w-full h-full transition ease-in-out duration-[8000ms] lg:w-full xl:w-[49%] hover:z-10 xl:-mt-10" ref="kasirGallery" :class="paraGallery" >
            <div class="w-full h-60 flex flex-wrap justify-center overflow-hidden bg-div lg:overflow-visible lg:hover:scale-110 transition lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-300">
              <img src="./assets/elfshop/5.pembayaran.png" alt="" class="w-full h-full grayscale transition ease-in-out duration-500 hover:scale-105 hover:grayscale-0">
              <div class="bg-white lg:w-1/3 w-1/2 absolute -top-2 -left-2 rounded-xl lg:rounded-none border border-solid border-text overflow-hidden shadow-div shadow-md"><h1 class="text-div font-neue text-center text-sm p-1 m-auto lg:text-xs">e-commerce : pay page</h1></div>
            </div>
        </div>

        

        
       
       </div>
      </div>
    </section>
  </div>

    <!-- footer -->
    <footer class="pt-24 pb-12">
      <div class="container flex">   
        <div class="border-t w-full border-text pt-10"> 
          <p class="text-sm text-center lg:text-right transition ease-in-out duration-500 text-text font-light"> © Design By <span class="text-1xl font-medium">Tio Prananda - 2022.</span></p>
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
     paraGallery : 'opacity-0',
     paraHome : 'opacity-0',
     paraProjects : 'opacity-0',
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
  // tangkap scroll number
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // efek sticky nav
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  if(currentScrollPosition > fixedNav ){
    this.showNavbar = true;
  } else {
    this.showNavbar = false;
  }
  // efek paralax galery  
  const kasirGallery = this.$refs.kasirGallery
  const kasirGallery2 = document.querySelector('#gallery');
  const kasirGalleryScroll2 = kasirGallery2.offsetTop-200;
  console.log(kasirGalleryScroll2)
  if(currentScrollPosition > kasirGalleryScroll2){
   if(kasirGallery){
    this.paraGallery = 'opacity-1 -translate-y-[100px]'
   }else{
    this.paraGallery = 'opacity-0 -translate-y-0'
   }
  }
  // efek paralax home 
  const home = this.$refs.home
  const home2 = document.querySelector('#home');
  const homeScroll2 = home2.offsetTop;
  console.log(homeScroll2)
  if(currentScrollPosition > homeScroll2){
   if(home){
    this.paraHome = 'opacity-1 -translate-y-[100px]'
   }else{
    this.paraHome = 'opacity-0 -translate-y-0'
   }
  }
   // efek paralax project
  const projects = this.$refs.projects
  const projects2 = document.querySelector('#projects');
  const projectsScroll2 = projects2.offsetTop-200;
  console.log(projectsScroll2)
  if(currentScrollPosition > projectsScroll2){
   if(projects){
    this.paraProjects = 'opacity-1 -translate-y-[100px]'
   }else{
    this.paraProjects = 'opacity-0 -translate-y-0'
   }
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
/* font untuk judul: Inter,-apple-system,BlinkMacSystemFont,Helvetica Neue,Arial,sans-serif */
/* font-family: 'Inter', sans-serif; */
}
</style>
