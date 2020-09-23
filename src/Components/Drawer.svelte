<script >
    import { fade, fly } from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    
    export function hideDrawer(){
       console.log('hide drawer');
       dispatch('hideDrawer');
    }

</script>

<style>
    .stick-out-bar::before, 
    .stick-out-bar::after {
      position: absolute;
      height: 0;
      width: 1.125rem;
      content: '';
    }
    .stick-out-bar::before {
      top: -0.5rem;
      border-bottom: 1.125rem solid white;
      border-right: 1.125rem solid transparent;
   
    }
    .stick-out-bar::after {
      bottom: -0.9675rem;
      border-top: 1.125rem solid white;
      border-right: 1.125rem solid transparent;
    
    }
</style>

<body class = "z-50">

    <section 
       transition:fly="{{ x: -300, duration: 400 }}"
        class="fixed h-full w-10/12 bg-gray-900  top-0 left-0 border-t  border-b border-gray-800">
          <!--LOGO SECTION-->
          <section>
              <span class="flex w-full items-center border-b border-gray-700 h-24">
                <img src="./static/images/lingpic.jpg" alt="Logo" class="h-24 w-24  z-40 p-4" />
                    <span class='text-white'>YOUR LOGO HERE</span>
              </span>
          </section>

          <!--CLICKABLE BUTTONS SECTION-->
          <section class=" leading-8 mt-6  text-gray-300 pl-4 border-gray-700">
            
              <span class="flex items-center h-10  py-2 border-b border-gray-700"> 
                  <svg class="text-white stroke-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class='text-sm px-2 tracking-wide'>Temp</span>
              </span>
              
              <span class="flex items-center h-10  py-2 border-b border-gray-700"> 
                    <svg class="text-white stroke-current h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <span class='text-sm  px-2 tracking-wide'>Inbox</span>
                </span>
                
                <span class="flex items-center h-10   py-2 border-b border-gray-700"> 
                  <svg class="text-white stroke-current h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span class='text-sm px-2 tracking-wide'>Trash</span>
                </span>
                
                <span class="flex items-center h-10  py-2 border-b border-gray-700"> 
                  <svg class="text-white stroke-current h-5 w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span class='text-sm px-2 tracking-wide'>Saved</span>
                </span>     
          </section>

          <!--div class="relative bg-gray-900 h-20 w-5 flex items-center rounded-tr-lg rounded-br-lg stick-out-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 -ml-1 text-gray-300">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div-->

          <div class="fixed flex flex-col bottom-0 w-10/12">
            <button
              class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600
                w-full"><svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                class="h-6 w-6 mr-2"><path
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              <span>Share</span></button>
            <a
              rel="noopener"
              href="https://www.buymeacoffee.com/noogui"
              target="_blank"
              class="flex items-center p-4 bg-orange-700 text-white">
              <img   src="./static/images/buymecoffee.png" alt="bmc logo" class="mr-2 h-8 w-auto" />
              <p>
                <span class="font-bold">Buy me Coffee 😇</span>
                <br />
              </p></a>
          </div>  
          
      </section>
       
      
         
</body>

