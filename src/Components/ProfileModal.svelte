<script>
    import { fade, fly } from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function hideProfile(){
        console.log('hideProfile()');
        dispatch('hideProfile');
    }

    function logoutUser(){
        console.log('logoutUser()');
        dispatch('logoutUser');
    }

</script>

<style>

</style>
<!--modal black bacground-->
<body class="z-50 flex justify-center" >

    <!--modal main body-->
    <div  transition:fade={{ duration: 300}}
        class="fixed flex flex-col bg-gray-900 rounded mt-24 pb-2 h-45% w-10/12 justify-between">
        <div>
            <!--brand name-->
            <div class="flex justify-center items-center py-3 ">
                <!-- CLose X button-->
                <button class="focus:outline-none " on:click={hideProfile}>
                    <svg class="ml-2 stroke-current h-8 w-8 text-pink-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                </button>
                <span class="justify-center text-2xl c mx-auto pr-5 text-gray-100">Google</span>
            </div>
            <!--profile -->
            <section class="flex items-center ml-2 mb-1 py-2 px-2">     
                <div class="mr-2">
                    <img src="./static/images/lingpic.jpg" alt="profilepic" class="h-12 w-12 rounded-full  z-40 " />
                </div>   
                <div clas="ml-2">
                    <span class='block text-gray-100 text-lg'>OwnageJuice</span>      
                    <span class='block text-gray-100'>noogui@protonmail.com</span>      
                </div>  
            </section>
            <hr class="mb-3" />
            <section class="flex items-center mr-2 px-2 mx-auto mb-24">                     
               <!--left empty for now, .. will think what to place here.-->
            </section>   

            <section class="flex justify-center items-center py-4">     
                <button class="focus:outline-none border-gray-100 px-4  border rounded-full text-gray-100 border-white">
                    <span>Manage your account </span>
                </button>
            </section>
        </div>
        
       <!--Log Out-->
        <section class="flex flex-row-reverse  mr-2 py-3 px-3 ">   
            <button class="focus:outline-none flex" on:click={logoutUser}>
                <span class='text-gray-100 text-base px-1 '>Logout</span>  
                <svg class="text-gray-200 stroke-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>       
            </button> 
                 
        </section>   
    </div> 

</body> 