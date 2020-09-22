<script>
    import {createEventDispatcher} from 'svelte';
    import {saveToFirestore} from "../Helpers/saveToFirestore.js"
    import {firebasedb} from "../Helpers/firebase.js"
    import InboxCard from '../Components/InboxCard.svelte';
    import MailboxCtr from '../Components/MailboxCtr.svelte';
    import ReplyQCtr from '../Components/ReplyQCtr.svelte';
    import Drawer from '../Components/Drawer.svelte';
    import CARD_DATA from "../Data/data.js";
    import { fade, fly } from 'svelte/transition';
    import ProfileModal from '../Components/ProfileModal.svelte';
    import {firebaseauth,firebaseuser} from "../Helpers/firebase.js"
    import { goto } from '@sveltech/routify'
    import { onMount } from 'svelte';
    
    let showDrawer = false;
    let showProfile = false;

    let userObject = {};

    /*onMount(async () => {
		//const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		//photos = await res.json();
		checkAuthState();
	}); */
    console.log("---------- Admin.svelte ----------");
    console.log("Firebase ready to use" + firebasedb);

    function checkAuthState(){
		firebaseauth.onAuthStateChanged(function(user) {
			if (user) {
              //  updateUserProfile();
              //  console.log(user);
                console.log(user.displayName + " is currently logged in.");
                
			//	signOutUser();
			//	$goto('../index')
			} else {
                console.log('No user currently logged in.');
                $goto('/');
			}
		});
    }
    
    function updateUserProfile(){	
		let user = firebaseauth.currentUser;


		user.updateProfile({
				displayName: "Noogui",
				photoURL: "https://images.unsplash.com/photo-1599140782241-144735f5949a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=144&q=80&facepad=3"
			}).then(function() {
				// Update successful.
				console.log(user)
			//	checkAuthState();
			}).catch(function(error) {
				console.log(error.code +" :"+ error.message);
			});
	 } 


    function signOutUser(){
		firebaseauth.signOut().then(function() {
            console.log("[signInUser()] "+ firebaseauth.currentUser + " has been signed out");
            $goto('/');
		//	isSignedIn = false;
		//	emailaddress='';
	 	//	password='';
		}).catch(function(error) {
			console.log(error.code+" :"+error.message);
		}); 
	 }

    function hideDrawer(){
        showDrawer = false;
        enableScroll();
    }

    function hideProfile(){
        showProfile = false;
        enableScroll();
    }

    function menuClick(){
        console.log("burger menu clicked..show Drawer");
        showDrawer = true;
        disableScroll();
    }

    function profileClick(){
        console.log("profile picture clicked..");
        showProfile = true;
        disableScroll();
    }

    function disableScroll() {
         document.body.style.overflow = 'hidden';
    }

    function enableScroll() {
       document.body.style.overflow = null;
    }

    function composeMessage(){
        console.log("write a new message");
    }

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

<svelte:window
on:keydown={e => {
    if(e.keyCode === 27){
        console.log("escape key was pressed");
        hideDrawer();
        hideProfile();
    }
}}/>

<body >
    {#if showProfile}         
            <ProfileModal on:hideProfile={hideProfile} on:logoutUser={signOutUser}/>          
    {/if}

    <div class="flex flex-col justify-center bg-gray-900 min-w-full px-4"> 
        <!--DRAWER/SIDE PANEL-->
        {#if showDrawer}    
            <button on:click={hideDrawer}  transition:fade="{{ x: -300, duration: 400 }}">
                <div class="z-40 fixed inset-0 h-full min-w-screen bg-black bg-opacity-90"> </div>             
            </button>
              
             <Drawer on:hideDrawer={()=>showDrawer=false} />  
        {/if}
        
        <!--NAV BAR/ SEARCH BAR-->
        <div  class=" flex rounded-lg mt-8 py-2 px-4  min-w-screen bg-gray-800">
            <span class="flex justify-center items-center px-3">
                <button on:click={menuClick} class="focus:outline-none">
                        <svg class="h-6 w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </span> 

            <input class="flex items-center justify-center w-64 px-2 py-2 bg-gray-800 placeholder-white text-white leading-tight rounded focus:outline-none"  placeholder="Search in mail"/>
        
            <span class="flex justify-center items-center px-2">
                <button on:click={profileClick} class="focus:outline-none">
                    <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=144&q=80&facepad=3" alt="profilepic">
                </button>
            </span>
        </div>  
        <!--PRIMARY LABEL-->
        <section>
            <h1 class="text-gray-500 py-3 text-sm mt-2">PRIMARY</h1>
        </section>
        <!--MAIN BODY WHERE YOU SEE MESSAGES-->
        <section class="">
            <InboxCard imageSrc={CARD_DATA[0].imgsrc}
                    title={CARD_DATA[0].title}
                    content={CARD_DATA[0].content}
                    techstack={CARD_DATA[0].notes}
                />
                <InboxCard imageSrc={CARD_DATA[1].imgsrc}
                    title={CARD_DATA[0].title}
                    content={CARD_DATA[0].content}
                    techstack={CARD_DATA[0].notes}
                />
                <InboxCard imageSrc={CARD_DATA[2].imgsrc}
                    title={CARD_DATA[0].title}
                    content={CARD_DATA[0].content}
                    techstack={CARD_DATA[0].notes}
                />
                <InboxCard imageSrc={CARD_DATA[3].imgsrc}
                title={CARD_DATA[0].title}
                content={CARD_DATA[0].content}
                techstack={CARD_DATA[0].notes} />
                
                <InboxCard imageSrc={CARD_DATA[2].imgsrc}
                title={CARD_DATA[0].title}
                content={CARD_DATA[0].content}
                techstack={CARD_DATA[0].notes} />
                <InboxCard imageSrc={CARD_DATA[0].imgsrc}
                title={CARD_DATA[0].title}
                content={CARD_DATA[0].content}
                techstack={CARD_DATA[0].notes} />
                <InboxCard imageSrc={CARD_DATA[0].imgsrc}
                title={CARD_DATA[0].title}
                content={CARD_DATA[0].content}
                techstack={CARD_DATA[0].notes} />  

                <InboxCard imageSrc=""
                title=""
                content=""
                techstack="" />      
            
        </section>
        <!--FLOATING BUTTON WHEN YOU WANT TO COMPOSE A MESSAGE-->
        <section class="">  
                <button on:click={composeMessage}
                        class="fixed flex justify-center items-center bg-teal-500  rounded-full  px-3 h-12 w-24 ml-2 
                        bottom-0 right-0 mb-24 mr-8  text-white text-base font-bold  p-2 focus:outline-none z-30">
                    <svg class="h-8 w-8 font-light text-pink-100 text-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                <span class="font-semibold text-pink-100 px-1 text-base tracking-wide">Write</span>
                </button>
        </section>
        
    </div>
    <!--FOOTER-->
    <div>
        <div class=" fixed flex bottom-0 bg-gray-800 justify-evenly items-center min-w-full h-20 -mb-1" >
            
            <div class="flex flex-col items-center mb-2 leading-tight">
            <div class="flex flex-row">
                    <!--MAIL ICON button with # of messages on top right-->
                    <MailboxCtr />
                    <div class="flex -ml-4 border-black justify-center items-center h-4 py-1 w-8 rounded-full border-0 text-black text-xs bg-green-400 -mb-3 z-20">
                        <span class="z-20 border-black text-black">
                            99+
                        </span> 
                    </div>
            </div>
                <span class="text-gray-300 text-sm mb-1 -ml-4">Mail</span>
            </div>
            <div class="flex flex-col items-center mb-2 leading-tight">
                <div class="flex flex-row">
                    <!--REPLY ICON button with # of to-be-replied-later-messages on top right-->
                    <ReplyQCtr />
                    <div class="flex -ml-4 border-black justify-center items-center h-4 py-1 w-8 rounded-full border-0 text-black text-xs bg-yellow-400 -mb-3 z-20">
                        <span class="z-20 border-black text-black">
                            5+
                        </span> 
                    </div>
                </div>
                <span class="text-gray-300 text-sm mb-1 -mr-1">Reply Q</span>
            </div>
        </div>
    </div>
</body>