const button = document.getElementById('edit');
const form = document.getElementById('editForm');

button.addEventListener('click', async () => {
  const newLastName = form.elements['lastName'].value;
  const newRoomNumber = form.elements['roomNumber'].value;
  const id = form.elements['id'].value;

  try {
    await fetch('/api/employee/edit/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, newLastName, newRoomNumber }),
    });
  } catch (e) {
    console.log('An error occured when deleting', e);
  }
});
