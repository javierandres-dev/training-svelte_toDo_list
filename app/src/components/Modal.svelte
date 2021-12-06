<script>
  export let isRemove;
</script>

<div
  class="modal fade"
  id="removeModal"
  tabindex="-1"
  aria-labelledby="removeModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="removeModalLabel">Remove ToDo?</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">This operation cannot be reversed</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >No, close</button
        >
        <button
          type="button"
          class="btn btn-danger"
          data-bs-dismiss="modal"
          on:click={isRemove}>Yes, remove</button
        >
      </div>
    </div>
  </div>
</div>
