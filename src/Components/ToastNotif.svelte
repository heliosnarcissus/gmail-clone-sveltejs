<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let toasts = []; // 알람이 연속적으로 발생할 수 있으니 배열로 생성
	let retainMs = 3500; // 생성되고 사라질 시간

	// 알람을 추가한다, 변수로 단순하게 메시지 한 줄 받음
	let toastId = 0;
	const heliosToast = (msg = '') => {
		toasts = [...toasts, {
			_id : ++toastId,
			msg
		}]; // 새로운 할당
		setTimeout(() => {
			unshiftToast();
		}, retainMs);
	};

	// 오래된 알람 하나 삭제
	const unshiftToast = () => {
		toasts = toasts.filter((a, i) => i > 0); // 새로운 할당
	};

	onMount(() => {
		window.heliosToast = heliosToast;
	});
</script>

<style>
    /*THIS IS NOT USED, kept for reference only*/
	.toast-wrapper {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: center;
		z-index: 9999;
	}
	.toast-item {
		border-radius: 4px;
		padding: 12px 10px;
		margin: 10px auto;
		max-width: 400px;
		background: rgba(0, 0, 0, 0.7);
		color: #fff;
	}
</style>

<div class="fixed text-center z-50 container bottom-0">
	{#each toasts as toast (toast._id)}
	<div class="text-center z-50 mx-auto max-w-lg text-white bg-blue-900 justify-center py-3" in:fly="{{delay: 600, duration: 300, x: 0, y: 50, opacity: 0.1, easing: backOut}}" out:fade={{duration:500, opacity: 0}}>
       Thank you! Message Sent.
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class=" h-5 w-5 inline stroke-1 stroke-current text-green-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
	</div>
	{/each}
</div>
