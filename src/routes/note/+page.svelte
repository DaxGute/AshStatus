<script>
  import { onMount } from 'svelte';

  let note = "Sample Note"

  onMount(async () => {
	  let noteRES = await fetch('/note', {method: "GET"});
    let noteJSON = await noteRES.json();
    note = noteJSON.value;
	});

  async function updateNote(event){
    let noteRES = await fetch('/note', {
      method: "POST",
      body: JSON.stringify({"value": note}),
    });
  }
</script>

<input type="text" bind:value={note} on:input={updateNote} />