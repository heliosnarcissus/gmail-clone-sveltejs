<script>
    export let imageSrc;
    export let title;
    export let content;
    export let techstack;
</script>

<button class="flex  bg-gray-900 items-center text-white mb-3 mt-2 focus:outline-none justify-between w-full">
        <div class="flex flex-grow-0">
            <img class="h-12 w-12 rounded-full mx-1 object-cover -ml-1 " src={imageSrc} alt="card">
        </div>

        <div class="flex flex-col flex-grow pl-1 ml-1 ">
            <div class="flex justify-between ">
                <div class="text-center font-bold  py-1">Coinbase</div>
                <div class="text-center   py-1">12:45 AM</div>     
            </div>
            <div class="flex">
                <span class="font-semibold">This is a subject</span>
            </div>
            <div class="flex">
                <span>This is the main content, the meee...</span>
            </div>     

        </div>  
</button>


<style>
    
</style>
<!--
    working backup
    <body class="flex  bg-gray-200">

        <div class="flex-grow-0">
            <img class="w-16 h-16 rounded-full mx-1 object-cover" src={imageSrc} alt="card">
        </div>

        <div class="flex justify-between flex-grow">
            <div class="text-gray-700 text-center  px-2 py-1">Coinbase</div>
            <div class="text-gray-700 text-center px-2 py-1">12:45 AM</div>     
        </div>
    </body>
-->