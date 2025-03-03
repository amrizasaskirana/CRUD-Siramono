document.getElementById("tanamanForm").addEventListener("submit", function (event) {

  event.preventDefault();
  let editIndex = document.getElementById("editIndex").value;
  let nama = document.getElementById("nama").value;
  if (nama.includes(",")) {
    alert("Nama tanaman tidak boleh mengandung koma!");
    return;
  }
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
  let emptyRow = document.getElementById("emptyRow");

  //Hapus pesan jika masih ada
  if (emptyRow) emptyRow.remove();

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
  let table = document.getElementById("tanamanList");
  let row = button.parentElement.parentElement;
  row.remove();
}

// Cek apakah tabel kosong setelah penghapusan
if (table.children.length === 0) {
  let emptyRow = document.createElement("tr");
  emptyRow.id = "emptyRow";
  emptyRow.innerHTML = "<td colspan='5' style='text-align: center; color: gray;'>Data kosong</td>";
  table.appendChild(emptyRow);
}
