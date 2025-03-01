document.getElementById("tanamanForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let editIndex = document.getElementById("editIndex").value;
  let nama = document.getElementById("nama").value;
  let jenis = document.getElementById("jenis").value;
  let status = document.getElementById("status").value;
  let waktu = document.getElementById("waktu").value;

  if (editIndex === "") {
    tambahTanaman(nama, jenis, status, waktu);
  } else {
    updateTanaman(editIndex, nama, jenis, status, waktu);
  }
  this.reset();
  document.getElementById("editIndex").value = "";
});

function tambahTanaman(nama, jenis, status, waktu) {
  let table = document.getElementById("tanamanList");
  let row = document.createElement("tr");
  row.innerHTML = `
      <td>${nama}</td>
      <td>${jenis}</td>
      <td>${status}</td>
      <td>${waktu}</td>
      <td>
          <button class='btn-edit' onclick='editTanaman(this)'>Edit</button> 
          <button class='btn-delete' onclick='hapusTanaman(this)'>Hapus</button>
      </td>
  `;
  table.appendChild(row);
}

function editTanaman(button) {
  let row = button.parentElement.parentElement;
  document.getElementById("editIndex").value = row.rowIndex;
  document.getElementById("nama").value = row.cells[0].innerText;
  document.getElementById("jenis").value = row.cells[1].innerText;
  document.getElementById("status").value = row.cells[2].innerText;
  document.getElementById("waktu").value = row.cells[3].innerText;
}

function updateTanaman(index, nama, jenis, status, waktu) {
  let table = document.getElementById("tanamanList");
  let row = table.rows[index - 1];
  row.cells[0].innerText = nama;
  row.cells[1].innerText = jenis;
  row.cells[2].innerText = status;
  row.cells[3].innerText = waktu;
}

function hapusTanaman(button) {
  let row = button.parentElement.parentElement;
  document.getElementById("tanamanList").deleteRow(row.rowIndex - 1);
}
