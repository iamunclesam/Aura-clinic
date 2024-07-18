<template>
  <main>
    <div class="sidebar">
      <sidebarVue />
    </div>



    <div class=" sm:ml-64">

      <div class="header">
        <headerVue />
      </div>

      <div class="breadcrumb-navigation">
        <breadcrumbVue title="Quick Statistics" />
      </div>

      <!-- <statistics_cardVue title="Patient" amount="200" mainIcon="et:profile-female" performance="-10% decrease"
          performanceIcon="mingcute:down-line" /> -->


      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="flex items-center gap-8 h-28 rounded bg-indigo-600 dark:bg-gray-800 px-6">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="rounded-full border border-white-500 p-2 text-white font-extrabold" width="4em" height="4em"
              viewBox="0 0 36 32">
              <path fill="currentColor"
                d="M22.22 20.726a.485.485 0 0 0-.425.155a.499.499 0 0 0-.126.435c.276 1.45 1.205 3.44 4.057 4.679c.338.146.86.26 1.522.403c2.478.536 6.622 1.434 7.64 5.232a.5.5 0 0 0 .967-.26c-1.177-4.387-5.872-5.404-8.395-5.95c-.584-.127-1.089-.236-1.336-.344c-1.714-.744-2.821-1.848-3.301-3.286c4.762.354 6.918-1.543 7.013-1.629a.5.5 0 0 0-.088-.805C27 17.786 27 12.361 27 10.318C27 4.605 23.152.076 18.219.005a5.875 5.875 0 0 0-.141-.003h-.001C13.072.03 9 4.564 9 10.11c0 2.043 0 7.469-2.748 9.038a.503.503 0 0 0-.06.829c.138.107 3.188 2.441 6.941 1.732c-.502 1.378-1.594 2.438-3.258 3.161c-.241.105-.721.22-1.277.352c-2.54.604-7.269 1.729-8.453 6.147a.5.5 0 0 0 .967.259c1.029-3.844 5.217-4.839 7.718-5.435c.627-.149 1.122-.267 1.444-.406c2.852-1.239 3.78-3.229 4.057-4.679a.497.497 0 0 0-.159-.467a.497.497 0 0 0-.482-.104c-2.707.852-5.208-.32-6.301-.97C10 17.381 10 12.35 10 10.11c0-4.997 3.626-9.083 8.12-9.11l.106.006C22.658 1.069 26 5.072 26 10.318c0 2.241 0 7.283 2.622 9.469c-.903.516-2.962 1.351-6.402.939" />
            </svg>
            <div class="content">
              <p class="text-white text-sm">Assigned Patients</p>
              <h1 class="text-3xl text-white py-1 text-gray-900 dark:text-gray-500">
                0
              </h1>
              <p class="text-xs text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white " width="2em" height="2em"
                  viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                      d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
                  </g>
                </svg>
                -20% Decreased
              </p>
            </div>

          </div>
          <div class="flex items-center gap-8 h-28 rounded bg-white dark:bg-gray-800 px-6">

            <svg xmlns="http://www.w3.org/2000/svg"
              class="rounded-full border border-green-500 p-2 text-green-500 font-extrabold" width="4em" height="4em"
              viewBox="0 0 256 256">
              <path fill="currentColor"
                d="M224 204h-12V40a4 4 0 0 0-4-4h-56a4 4 0 0 0-4 4v44H96a4 4 0 0 0-4 4v44H48a4 4 0 0 0-4 4v68H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M156 44h48v160h-48Zm-56 48h48v112h-48Zm-48 48h40v64H52Z" />
            </svg>
            <div class="content">
              <p class="text-green-600 text-sm">Total Appointments</p>
              <h1 class="text-3xl text-green-500 py-1 text-gray-900 dark:text-gray-500">
                0
              </h1>
              <p class="text-xs flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 " width="2em" height="2em"
                  viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                      d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
                  </g>
                </svg>
                -20% Increased
              </p>
            </div>

          </div>
          <div class="flex items-center gap-8 h-28 rounded bg-white dark:bg-gray-800 px-6">
            <svg class="rounded-full border border-orange-500 p-2 text-orange-500 font-extrabold"
              xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 20 20">
              <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                <path
                  d="M7.097 5.3c-.646.484-1 1.115-1 1.77c0 .656.354 1.287 1 1.772c.646.485 1.562.8 2.595.8a.5.5 0 0 1 0 1c-1.228 0-2.36-.373-3.195-1c-.836-.627-1.4-1.53-1.4-2.571c0-1.04.564-1.945 1.4-2.572c.836-.626 1.967-.999 3.195-.999c1.918 0 3.647.919 4.314 2.334a.5.5 0 0 1-.905.426c-.457-.97-1.761-1.76-3.409-1.76c-1.033 0-1.949.315-2.595.8" />
                <path
                  d="M11.957 14.983c.646-.484.999-1.116.999-1.77c0-.656-.353-1.287-1-1.772c-.646-.485-1.562-.8-2.594-.8a.5.5 0 1 1 0-1c1.228 0 2.36.373 3.195 1s1.399 1.53 1.399 2.571c0 1.04-.564 1.945-1.4 2.571c-.835.627-1.966 1-3.194 1c-1.918 0-3.647-.919-4.314-2.334a.5.5 0 0 1 .905-.426c.457.97 1.76 1.76 3.409 1.76c1.032 0 1.948-.315 2.595-.8M9 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 9 1" />
                <path d="M9 16a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 9 16" />
              </g>
            </svg>
            <div class="content">
              <p class="text-orange-400 text-sm">Total Revenue</p>
              <h1 class="text-3xl text-orange-400 py-1 dark:text-gray-500">
                $0
              </h1>
              <p class="text-xs flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 " width="2em" height="2em"
                  viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                      d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
                  </g>
                </svg>
                -20% Increased
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 dark:bg-gray-900 p-3 sm:p-4">
        <div class="col bg-white p-3">
          <div
            class="flex flex-col md:flex-row items-center border-b justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4">
            <h1 class="text-indigo-600 text-2xl">Patient Year by Year</h1>
          </div>
          <barChartVue />
        </div>
        <section class="">
          <div class="mx-auto max-w-screen-xl">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden">
              <div
                class="flex flex-col md:flex-row items-center border-b justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <h1 class="text-indigo-600 text-2xl">Today Patients</h1>
              </div>
              <div class="overflow-x-auto">
                <div class="overflow-x-auto">
                  <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Patient name
                        </th>
                        <th scope="col" class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Assigned Doctor
                        </th>
                        <th scope="col" class="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-200 dark:border-gray-700">
                          John Doe</th>
                        <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Dr Adeyemo</td>
                        <td class="px-4 py-3">3rd Thu 2024</td>
                      </tr>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-200 dark:border-gray-700">
                          John Doe</th>
                        <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Dr Adeyemo</td>
                        <td class="px-4 py-3">3rd Thu 2024</td>
                      </tr>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-200 dark:border-gray-700">
                          John Doe</th>
                        <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Dr Adeyemo</td>
                        <td class="px-4 py-3">3rd Thu 2024</td>
                      </tr>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-200 dark:border-gray-700">
                          John Doe</th>
                        <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">Dr Adeyemo</td>
                        <td class="px-4 py-3">3rd Thu 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <documentButtonsVue />
              <nav class="m-3" aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 1 1 5l4 4" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page"
                      class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Next</span>
                      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 9 4-4-4-4" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </div>

      <section class="dark:bg-gray-900 p-3 sm:p-4">
        <div class="mx-auto max-w-screen-xl">
          <!-- Start coding here -->
          <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <h1 class="text-indigo-600 text-2xl">Appointments</h1>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-3">Patient name</th>
                    <th scope="col" class="px-4 py-3">Doctor</th>
                    <th scope="col" class="px-4 py-3">Check-Up</th>
                    <th scope="col" class="px-4 py-3">Date</th>
                    <th scope="col" class="px-4 py-3">Time</th>
                    <th scope="col" class="px-4 py-3">
                      <span class="">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-gray-700">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">John
                      Doe</th>
                    <td class="px-4 py-3">Dr Adeyemo</td>
                    <td class="px-4 py-3">DNA Test</td>
                    <td class="px-4 py-3">3rd Thu 2024</td>
                    <td class="px-4 py-3">2:30Pm</td>
                    <td class="px-4 py-3"><span
                        class="bg-yellow-300 text-xs text-white font-medium me-2 px-2.5 py-0.5">Pending</span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <documentButtonsVue />
            <nav
              class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                of
                <span class="font-semibold text-gray-900 dark:text-white">1000</span>
              </span>
              <ul class="inline-flex items-stretch -space-x-px">
                <li>
                  <a href="#"
                    class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page"
                    class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                </li>
                <li>
                  <a href="#"
                    class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>



    </div>
  </main>
</template>

<script>
import sidebarVue from '@/components/layouts/sidebar.vue'
import headerVue from '@/components/layouts/header.vue'
import breadcrumbVue from '@/components/layouts/breadcrumb.vue'
import statistics_cardVue from '@/components/statistics_card.vue'
import indexVue from '@/components/chart/index.vue'
import barChartVue from '@/components/chart/barChart.vue'
import documentButtonsVue from '@/components/documentButtons.vue'
import ApiService from '@/utils/api_service'



export default {
  components: { sidebarVue, headerVue, breadcrumbVue, statistics_cardVue, indexVue, barChartVue, documentButtonsVue },
  data() {
    return {
      assignedPatinet: []
    }
  },

  mounted() {
    this.fetchAssignedPatient()
  },

  methods: {
    async fetchAssignedPatient() {
      try {
        const response = await ApiService.getDoctorPatients();
        const data = response.data;
        this.assignedPatinet = data;
        console.log("Assigned Patient:", data)
      } catch (error) {
        console.log(error.message);
      }
    }
  }
}
</script>

<style></style>