<script lang="ts">
  export let input_type: string = "text";
  export let cols: number = 3;
  export let label_text: string;
  export let id: string;
  export let name: string;
  export let required: boolean = true;
  export let placeholder: string = "";
  export let error_message: string = "";
  export let accepts = ".jpg, .jpeg, .png, .webp";
</script>

<div class="mb-3">
  <label for={id} class="form-label">{label_text}</label>
  {#if input_type == "textarea" && cols}
    <textarea
      class="form-control"
      {name}
      {id}
      {placeholder}
      {required}
      {cols}
    />
  {:else}
    <input
      type={input_type}
      class="form-control"
      {name}
      {id}
      {placeholder}
      {required}
      accept={input_type == "file" ? accepts : null}
    />
  {/if}
  <span class="text-danger form-text"> {error_message} </span>
</div>
