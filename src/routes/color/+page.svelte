<script>
    import { onMount } from 'svelte';

    let color = "#000000"; // Initial color value
  
    onMount(async () => {
	    let colorRES = await fetch('/color', {method: "GET"});
        let colorJSON = await colorRES.json();
        color = colorJSON.value;
	});

    async function updateColor(event){
        let colorRES = await fetch('/color', {
        method: "POST",
        body: JSON.stringify({"value": color}),
    });
  }
  </script>
  

  
  <div>
    <input type="color" bind:value={color} on:change={updateColor}>
  </div>
  
    <style>
    .color-preview {
      width: 50px;
      height: 50px; 
      border: 1px solid white;
    }
  </style>