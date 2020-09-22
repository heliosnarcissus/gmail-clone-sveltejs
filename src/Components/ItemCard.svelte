<script>
    export let imageSrc;
    export let title;
    export let content;
    export let techstack;
</script>

<div class="flex h-24 min-w-sm rounded-lg shadow bg-white my-1 mx-1">
    <div class="h-48 flex-none bg-cover rounded-t  text-center overflow-hidden" style="background-image: url('/static/images/lingpic.jpg')" title="Woman holding a mug"></div>
    <div class="flex items-center">
        <img class="w-16 h-16 rounded-full mx-4 object-cover" src={imageSrc} alt="card">
        <div class="text-limit">
          <p class="text-xs text-red leading-none text-blue-900 font-semibold">{title}</p>
          <p class="text-xs">{content}</p>
          <p class="text-xs text-gray-600">{techstack}</p>
        </div>
      </div>
</div>


<style>
    .text-limit{
        width: 14rem;
    }
</style>