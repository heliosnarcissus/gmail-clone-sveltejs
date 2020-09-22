<script>
    import {createEventDispatcher} from 'svelte';
    import SendMessageBtn from "./SendMessageBtn.svelte";
    import {emailInput} from "../stores.js";
    import {isEmpty, isValidEmail,isFormValid} from "../Helpers/validation.js"
    import {saveToFirestore} from "../Helpers/saveToFirestore.js"
    import {firebaseauth} from "../Helpers/firebase.js"

    const dispatch = createEventDispatcher();

    const isValidColor={
        nameBorder: '0',
        emailBorder: '0'
    };

    let emailIsFocused = false;
    const emailOnFocus = ()=>{
        emailIsFocused=true;
        isValidColor.emailBorder='0';
    }
    const emailOnBlur = ()=>{
        emailIsFocused=false;
        isValidColor.emailBorder='0';
    }
    let nameIsFocused = false;
    const nameOnBlur = ()=>nameIsFocused=false;
    const nameOnFocus = ()=>{
        nameIsFocused=true;
        isValidColor.nameBorder='0';
    }

    let emailaddress='';
    let nameLength='';
    let msg = '';

    let nameIsEmpty = false;
    $: isEmailValid = isValidEmail(emailaddress);

    let showToast = true;

    function closeModal(){
        console.log('you clicked the closeX button..');
        dispatch('closeModal');
    }

    function saveAndSendForm(name,email,msg){
        //if form is valid, value returned being TRUE..reset fields and show toast notif.
        if(isFormValid(name,email)){
            saveToFirestore(name,email,msg);
            saveSuccessResetFields();
        //execute else condition as one block, change border color if field empty/invalid   
        }else{
            if(isEmpty(name)){
                    isValidColor.nameBorder = 'border-red-500';
            }
            if(!isValidEmail(emailaddress)){
                    isValidColor.emailBorder = 'border-red-500';
            }
        }
    }

    function saveSuccessResetFields(){
        username.value="";
        email.value="";
        message.value="";   
        nameLength='';
        emailaddress='';

        window.heliosToast();
        console.log('save successful..fields are reset. nameLength: '+ nameLength + ' emailaddress: ' +emailaddress);
    }

    console.log("name length: "+{$emailInput}.value);

</script>

 <style>
   /* ::placeholder { **Chrome, Firefox, Opera, Safari 10.1+ **
        color:#ff6961;
        font-size: small;
    }

    :-ms-input-placeholder { **Internet Explorer support**
        color:#ff6961;
        font-size: small;
    } */
 </style>

 <section class="w-full z-50 px-4">
     <div class="flex flex-row-reverse">
         <button on:click={closeModal} >
            <p class="inline-block text-white">close</p>
            <svg viewBox="0 0 20 20" fill="currentColor" class="inline-block w-6 h-6 text-white fill-current">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
         </button>
    </div>

    <div  class="bg-gray-100 shadow-md rounded px-6 pt-8 pb-2">
    <form >
            <div class=" mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Name
                </label>
                <input bind:value={nameLength} on:focus={nameOnFocus} on:blur={nameOnBlur}
                     class="{isValidColor.nameBorder}  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your name here">
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-1" for="email">
                Email
                </label>
                <input bind:value={emailaddress} on:focus={emailOnFocus} on:blur={emailOnBlur}
                    class="{isValidColor.emailBorder}   border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your email here">
            </div>
    
            {#if emailIsFocused === true && !isEmailValid}
                 <p class="text-red-600 font-light text-xs -mt-2 px-1 mb-2">please use a valid e-mail address</p>
            {/if}

            <div class="">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                Message
                </label>
                <textarea bind:value={msg} 
                class=" no-resize  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight
                    focus:outline-none   focus:bg-white h-32 resize-none" id="message" maxlength="310"/>
            </div>
            
            <button on:click={saveAndSendForm(nameLength,emailaddress,msg)}
            id="sendBtn"    
            class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Send
            </button>
        </form>
    </div>

 </section>
 