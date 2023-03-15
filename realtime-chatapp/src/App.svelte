<script>
	import {auth,googleProvider} from "./firebase";
	import {authState} from "rxfire/auth";

	import Chatroom from "./Chatroom.svelte";

	let user;

	const unsubscribe = authState(auth).subscribe(usr => user =usr);

	function login(){
		auth.signInWithPopup(googleProvider);
	}

	function logout(){
		auth.signOut();
	}

</script>

<style>
	main {
		position: fixed;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 400px;
		background: #fff;
		border: 1px solid #eee;
		border-radius: 5px;
		box-shadow: 0 5px 10px rgba(0,0,0,0.1);
	}
	.login-form{
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.login-form button {
		padding: 10px;
		background: #fff;
		color: #111;
		font-size: 16px;
		cursor: pointer;
		outline: none;
		border: 1px solid #bbb;
	}
	.login-form button i.fa-brands{
		padding-right: 10px;
		border-right: 1px solid #ddd;
		color: #555;
	}
</style>

<main>
	{#if user}
		<Chatroom user={user} logout ={logout}/>
	{:else}
		<div class="login-form">
			<button on:click={login}>
				<i class="fa-brands fa-google"></i>
				Sign in with Google
			</button>
		</div>
	{/if}
</main>

