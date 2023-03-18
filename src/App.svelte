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
	.title {
		text-align: center;
		font-size: 2rem;
		font-weight: 600;
		color: #8b0000;
		margin-bottom: 30px;
	}
	.info{
		text-align: center;
		font-size: 1.2rem;
		font-weight: 400;
		color: rgb(0, 0, 99);
		padding: 0px 30px;
	}
	main {
		position: fixed;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 500px;
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
	<h1 class="title">Real-time Chat</h1>
	{#if user}
		<p>Welcome, {user.displayName}</p>
	{/if}
	{#if user}
		<Chatroom user={user} logout ={logout}/>
	{:else}
	<p class="info">This is simple real-time-chat app. Please sign it to try.</p>
		<div class="login-form">
			<button on:click={login}>
				<i class="fa-brands fa-google"></i>
				Sign in with Google
			</button>
		</div>
	{/if}
</main>

