const buttons = document.querySelectorAll('.delete');

buttons.forEach((button) => {
  button.addEventListener('click', async () => {
    const employeeId = button.getAttribute('data-id');

    try {
      await fetch('/api/employee/delete/' + employeeId, {
        method: 'DELETE',
      });
    } catch (e) {
      console.log(e);
    }
  });
});
