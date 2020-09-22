<script>
	import {createEventDispatcher} from 'svelte';
    import {emailInput} from "../stores.js";
    import {isEmpty, isValidEmail,isFormValid} from "../Helpers/validation.js"
    import {saveToFirestore} from "../Helpers/saveToFirestore.js"
	import {firebaseauth,firebaseuser} from "../Helpers/firebase.js"
	import { onMount } from 'svelte';
	import { goto } from '@sveltech/routify'
  
	console.log(firebaseauth);

	 let emailaddress='';
	 let password='';
	 let isSignedIn = false;
	 let statusColor = '';
	 
	 const userObject = {
		name: '',
		email: '',
		imageUrl: ''
	 };

	 onMount(async () => {
		//const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
		//photos = await res.json();
		console.log("---------- Index.svelte ----------");
		checkAuthState();
	});

	function checkAuthState(){
		firebaseauth.onAuthStateChanged(function(user) {
			if (user) {
			//	console.log(user);
				console.log(user.displayName + " is currently logged in.");
				isSignedIn = true;
				userObject.name = user.displayName;
				userObject.email = user.email;
				userObject.imageUrl = user.photoURL;
				statusColor = 'bg-green-500';
				$goto('../Admin')
			} else {
				console.log('No user currently logged in.');
				statusColor = 'bg-red-500';
			}
		});
	}

	 console.log("user logged in is: "+firebaseauth.currentUser);

	 function registerUser(emailaddress, password){
			console.log("email entered: "+ emailaddress);
			console.log("password entered: "+ password);

			firebaseauth.createUserWithEmailAndPassword(emailaddress, password).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			}).then(function(result){
				console.log("createUserWithEmailAndPassword: user logged in is: "+firebaseauth.currentUser);
			});
 	 }

	function signInUser(email, password){
		console.log("[signInUser()] email entered: "+ emailaddress);

		firebaseauth.signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
			console.log(errorCode+" :"+ errorMessage);
		}).then(function(){
			let user = firebaseauth.currentUser;
			//console.log(user);
			console.log("[signInUser()]: "+ user.displayName + " login sucessful!");
		});
	 } 

	 function signOutUser(){
		firebaseauth.signOut().then(function() {
			console.log("[signInUser()] "+ firebaseauth.currentUser + " has been signed out");
			isSignedIn = false;
			emailaddress='';
	 		password='';
		}).catch(function(error) {
			console.log(error.code+" :"+error.message);
		}); 
	 }

	 function updateUserProfile({}){	
		let user = firebaseauth.currentUser;

		user.updateProfile({
				displayName: "Noogui",
				photoURL: "https://images.unsplash.com/photo-1599140782241-144735f5949a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=144&q=80&facepad=3"
			}).then(function() {
				// Update successful.
				console.log(user)
				checkAuthState();
			}).catch(function(error) {
				console.log(error.code +" :"+ error.message);
			});
	 }

	 function sendEmailVerification(){
		let user = firebaseauth.currentUser;

		user.sendEmailVerification().then(function() {
			console.log('email verfication sent to :'+user.email);
		}).catch(function(error) {
			console.log(error.code +" :"+ error.message);
		});
	 }


	// on:focus={emailOnFocus} on:blur={emailOnBlur}
</script>

<div class="flex justify-center items-center py-2 mt-6">
	<label class=" px-2 text-2xl" for="isSignedIn">isSignedIn:</label>
	<span class="{statusColor} text-2xl text-gray-200 px-3" for="isSignedIn">{isSignedIn}</span>
</div>

<section class="p-4">
	<form >
		<div class=" mb-4">
			<label class="block text-2xl text-gray-700 text-sm font-bold mb-2" for="username">
			Email
			</label>
			<input bind:value={emailaddress} 
				class=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email">
		</div>
		
		<div class="mb-4">
			<label class="block text-2xl  text-gray-700 text-sm font-bold mb-1" for="email">
			Password
			</label>
			<input bind:value={password}
				class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password">
		</div>
		<button on:click={registerUser(emailaddress,password)}
			id="sendBtn"    
			class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			Register
		</button>
	</form>
	<!--sign out button-->
	<div>
		<button on:click={signInUser(emailaddress,password)} 
			class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			Sign In
		</button>
	</div>

	<div>
		<button on:click={updateUserProfile} 
			class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			Update Profile
		</button>
	</div>

	<div>
		<button on:click={sendEmailVerification} 
			class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			Send Email Verification
		</button>
	</div>

	<div>
		<button on:click={signOutUser} 
			class="mt-2  shadow bg-teal-400 hover:border-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
			Sign Out
		</button>
	</div>
</section>

<hr class="mb-8"/>

{#if isSignedIn}
	<div class="flex flex-col items-center">
		<img class="h-32 w-48 mb-2" src={userObject.imageUrl} alt="profile pic">
		<section>
			<span class="block px-2 text-lg">name: {userObject.name}</span>
			<span class="block  px-2 text-lg">email: {userObject.email}</span>
		</section>
	</div>
{/if}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor h-48 w-48" class="w-4 h-4 -ml-1 text-gray-300">
	<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>

<style>

</style>