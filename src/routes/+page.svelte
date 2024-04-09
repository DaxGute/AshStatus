<script>
    import { onMount } from 'svelte';

    let note = ""

    onMount(async () => {
        let noteRES = await fetch('/note', {method: "GET"});
        let noteJSON = await noteRES.json();
        note = noteJSON.value;
    });

</script>

<svelte:window style="background-color: {backgroundColor}"/>

  
<div class="full-width-text">
    {note}
</div>


<style>
    .full-width-text {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw; /* 100% of the viewport width */
        height: 100vh; /* 100% of the viewport height */
        display: flex;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        font-size: 30vh;
    }
  </style>
  
