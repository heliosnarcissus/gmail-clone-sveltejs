<script>
   import ContactForm from './ContactForm.svelte';
   import ToastNotif from "./ToastNotif.svelte";

   let shown = true;
   let showToast = true;

   export function showModal(){
        shown = true;
		console.log(shown + " set to TRUE");
	}

	export function hideModal(){
		shown = false;
		console.log(shown + " set to FALSE");
	}

</script>

{#if shown}
    {#if showToast}  
 
    <div class="inline-block z-50">
        <ToastNotif/>     
    </div>
  
    {/if}
    
    <div class="flex h-screen w-screen justify-center items-center bg-black bg-opacity-75 z-10 fixed">
        <!--div class="flex justify-center text-gray-900 bg-white w-full h-64 opacity-100 z-50 px-8">              
        </div-->
        <ContactForm on:closeModal={hideModal}/>         
    </div> 
{/if}


<style>

</style>