<script>
    /*THIS COMPONENT IS NO LONGER USED BUT KEPT FOR FUTURE REFERENCE*/
    import {createEventDispatcher} from 'svelte';
    import { fade } from 'svelte/transition';

    const dispatch = createEventDispatcher();
    let showSentMessage = "invisible";
    let btnColor = "bg-teal-400";

    export function clickSend(){
        console.log('send button clicked..');
        //call function from ContactForm.svelte named 'saveToFirestore()'
        sendBtn.disabled=true;
        dispatch('sentFunction');
        setTimeout(()=>{
            //show 'Message Sent' notif
            showSentMessage = "visible";     
        },600);
        //disable button temporarily to prevent spam clicking
       
        //hide 'Message Sent' after 2 seconds
        setTimeout(()=>{
            showSentMessage = "invisible";
        },2000);
    }

</script>

<style>

</style>

<div class="md:w-1/3">
    <button on:click={clickSend}  id="sendBtn"    
            class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
    Send
    </button>

    <section class=" {showSentMessage}  flex py-1 justify-center items-center w-full"> 
        <p class="inline-block text-green-400 text-sm">Message Sent </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex h-5 w-5 inline-block stroke-1 stroke-current text-green-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    </section>
</div>  