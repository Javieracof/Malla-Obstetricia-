const ramos = {
  "Cosmovisión Cristiana": ["Antropología Bíblica"],
  "Taller de Habilidades de Aprendizaje I": ["Taller de Habilidades de Aprendizaje II"],
  "Anatomía Humana": ["Fisiología Humana", "Anatomía en Salud Sexual y Reproductiva"],
  "Biología Celular": ["Histoembriología para Obstetricia", "Bioquímica", "Microbiología e Inmunología"],
  "Química General y Orgánica": ["Bioquímica"],
  "Psicología del Desarrollo para Matronería": ["Psicología de la Salud"],
  "Matronería y Fundamentos Socioculturales de la Salud": ["Anatomía en Salud Sexual y Reproductiva", "Fundamentos de Salud Sexual y Reproductiva"],
  "Gestión Básica en Emergencias y Desastres": ["Atención en Matronería Basada en la Evidencia y Tecnología"],

  "Antropología Bíblica": ["Ciencia y Religión"],
  "Taller de Habilidades de Aprendizaje II": ["Trabajo Final de Carrera"],
  "Fisiología Humana": ["Fisiopatología Humana"],
  "Histoembriología para Obstetricia": [],
  "Bioquímica": ["Farmacología General", "Microbiología e Inmunología"],
  "Psicología de la Salud": ["Sexualidad, Salud y Género"],
  "Anatomía en Salud Sexual y Reproductiva": [],
  "Fundamentos de Salud Sexual y Reproductiva": ["Semiología y Patología Femenina Aplicada", "Sexualidad, Salud y Género"],
  "Atención en Matronería Basada en la Evidencia y Tecnología": ["Procedimientos Básicos para la Atención Integral en Matronería"],

  // Solo algunos para mostrar estructura...
};

const malla = document.getElementById("malla");
const estados = {};

Object.keys(ramos).forEach(nombre => {
  estados[nombre] = false;

  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.id = nombre;
  div.onclick = () => aprobar(nombre);
  malla.appendChild(div);
});

const iniciales = [
  "Cosmovisión Cristiana",
  "Taller de Habilidades de Aprendizaje I",
  "Anatomía Humana",
  "Biología Celular",
  "Química General y Orgánica",
  "Psicología del Desarrollo para Matronería",
  "Matronería y Fundamentos Socioculturales de la Salud",
  "Gestión Básica en Emergencias y Desastres"
];

iniciales.forEach(nombre => {
  document.getElementById(nombre).classList.remove("bloqueado");
});

function aprobar(nombre) {
  const div = document.getElementById(nombre);
  if (div.classList.contains("bloqueado")) return;

  if (!estados[nombre]) {
    div.classList.add("aprobado");
    estados[nombre] = true;

    ramos[nombre].forEach(dep => {
      const bloqueado = document.getElementById(dep);
      if (bloqueado) {
        bloqueado.classList.remove("bloqueado");
      }
    });
  }
}
