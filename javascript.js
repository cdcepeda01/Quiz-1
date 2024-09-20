

const codigo = document.getElementById('Codigo');
const nombre = document.getElementById('nombre');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const error = document.getElementById('error');
const estudianteForm = document.forms["estudianteForm"];

const validarNota = (nota1, nota2, nota3, nota4) => {
    nombreErrorMsg.textContent = "";
    if (nombre.length > 10) {
      nombreErrorMsg.textContent = "La nota es superior a 5";
      return false;
    }
    return true;
  };

const cargarEstudiante = (estudiante)=>{
    const row = document.createElement('tr');

    const codigoCeld = document.createElement('td');
    codigoCeld.textContent= estudiante.codigo;

    const nombreCeld = document.createElement('td');
    nombreCeld.textContent= estudiante.nombre;
    
    const nota1Celd = document.createElement('td');
    nota1Celd.textContent= estudiante.nota1;
    
    const nota2Celd = document.createElement('td');
    nota2Celd.textContent= estudiante.nota2;

    const nota3Celd = document.createElement('td');
    nota3Celd.textContent= estudiante.nota3;

    const nota4Celd = document.createElement('td');
    nota4Celd.textContent= estudiante.nota4;

    const btnCeld= document.createElement('td');
    const eleminiarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Borrar';

    eliminarBtn.addEventListener('click',()=>{
        row.remove();
    });
    btnCeld.appendChild(eliminarBtn);

    row.appendChild(codigoCeld);
    row.appendChild(nombreCeld);
    row.appendChild(nota1Celd);
    row.appendChild(nota2Celd);
    row.appendChild(nota3Celd);
    row.appendChild(nota4Celd);

    const tbody = listaEstudiantes.getElementsByTagName('tbody')[0];
    tbody.appendChild(row)

}
form.addEventListener('Submit', (e) => {
    e.preventDefault();
    const codigo = codigo.value;
    const nombre = nombre.value;
    const nota1 = nota1.value;
    const nota2 = nota2.value;
    const nota3 = nota3.value;
    const nota4 = nota4.value;

    const estudiante ={
        codigo: codigo.value,
        nombre: estudianteForm['nombre'].value,
        nota1: estudianteForm['nota1'].value,
        nota2: estudianteForm['nota2'].value,
        nota3: estudianteForm['nota3'].value,
        nota4: estudianteForm['nota4'].value,


    };
    cargarEstudiante(estudiante);
    estudianteForm.reset();

})