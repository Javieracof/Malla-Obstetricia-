const ramos = {
  // PRIMER AÑO - SEMESTRE 1
  "Cosmovisión Cristiana": ["Antropología Bíblica"],
  "Taller de Habilidades de Aprendizaje I": ["Taller de Habilidades de Aprendizaje II"],
  "Anatomía Humana": ["Fisiología Humana", "Anatomía en Salud Sexual y Reproductiva"],
  "Biología Celular": ["Histoembriología para Obstetricia", "Bioquímica", "Microbiología e Inmunología"],
  "Química General y Orgánica": ["Bioquímica"],
  "Psicología del Desarrollo para Matronería": ["Psicología de la Salud"],
  "Matronería y Fundamentos Socioculturales de la Salud": ["Anatomía en Salud Sexual y Reproductiva", "Fundamentos de Salud Sexual y Reproductiva"],
  "Gestión Básica en Emergencias y Desastres": ["Atención en Matronería Basada en la Evidencia y Tecnología"],

  // PRIMER AÑO - SEMESTRE 2
  "Antropología Bíblica": ["Ciencia y Religión"],
  "Taller de Habilidades de Aprendizaje II": ["Trabajo Final de Carrera"],
  "Fisiología Humana": ["Fisiopatología Humana"],
  "Histoembriología para Obstetricia": [],
  "Bioquímica": ["Farmacología General", "Microbiología e Inmunología"],
  "Psicología de la Salud": ["Sexualidad, Salud y Género"],
  "Anatomía en Salud Sexual y Reproductiva": [],
  "Fundamentos de Salud Sexual y Reproductiva": ["Semiología y Patología Femenina Aplicada", "Sexualidad, Salud y Género"],
  "Atención en Matronería Basada en la Evidencia y Tecnología": ["Procedimientos Básicos para la Atención Integral en Matronería"],

  // SEGUNDO AÑO - SEMESTRE 3
  "Ciencia y Religión": ["Enseñanzas de la Biblia"],
  "Complementario I": ["Complementario II"],
  "Inglés I": ["Inglés II"],
  "Fisiopatología Humana": ["Promoción de la Salud"],
  "Farmacología General": ["Promoción de la Salud", "Preclínico para la Atención Integral en Matronería", "Nutrición y Conducta Alimentaria en Salud Sexual y Reproductiva"],
  "Microbiología e Inmunología": ["Preclínico para la Atención Integral en Matronería", "Microbiología Aplicada a Salud Sexual y Reproductiva"],
  "Semiología y Patología Femenina Aplicada": [],
  "Sexualidad, Salud y Género": [],
  "Procedimientos Básicos para la Atención Integral en Matronería": ["Estrategias de Manejo del Parto Natural", "Preclínico para la Atención Integral en Matronería"],

  // SEGUNDO AÑO - SEMESTRE 4
  "Enseñanzas de la Biblia": ["Familia y Sociedad"],
  "Complementario II": ["Complementario III"],
  "Inglés II": ["Inglés III"],
  "Promoción de la Salud": ["Salud Familiar y Comunitaria"],
  "Ginecología I": ["Ginecología II"],
  "Obstetricia I": ["Obstetricia II"],
  "Neonatología I": ["Neonatología II"],
  "Estrategias de Manejo del Parto Natural": ["Hormonoterapia en Salud Sexual y Reproductiva"],
  "Preclínico para la Atención Integral en Matronería": ["Integrado en Atención Primaria de Salud I"],

  // TERCER AÑO - SEMESTRE 5
  "Familia y Sociedad": ["Salud y Autocuidado Responsabilidad Social y Medioambiente"],
  "Inglés III": ["Inglés IV"],
  "Salud Familiar y Comunitaria": ["Estadística Aplicada a la Salud", "Salud Pública", "Consejería en Salud Sexual y Reproductiva"],
  "Ginecología II": ["Urgencias en Obstetricia, Ginecología y Neonatología"],
  "Obstetricia II": ["Urgencias en Obstetricia, Ginecología y Neonatología"],
  "Neonatología II": ["Urgencias en Obstetricia, Ginecología y Neonatología"],
  "Hormonoterapia en Salud Sexual y Reproductiva": ["Nutrición y Conducta Alimentaria en Salud Sexual y Reproductiva", "Microbiología Aplicada a Salud Sexual y Reproductiva", "Consejería en Salud Sexual y Reproductiva"],
  "Integrado en Atención Primaria de Salud I": ["Integrado en Atención Primaria de Salud II"],

  // TERCER AÑO - SEMESTRE 6
  "Salud y Autocuidado Responsabilidad Social y Medioambiente": ["Misión y Servicio"],
  "Inglés IV": [],
  "Estadística Aplicada a la Salud": ["Metodología de la Investigación"],
  "Salud Pública": ["Metodología de la Investigación"],
  "Nutrición y Conducta Alimentaria en Salud Sexual y Reproductiva": ["Inmunización en Salud Sexual y Reproductiva"],
  "Microbiología Aplicada a Salud Sexual y Reproductiva": ["Epidemiología para la Gestión en Salud Sexual y Reproductiva", "Inmunización en Salud Sexual y Reproductiva"],
  "Atención de Matronería en el Entorno Hospitalario I": ["Atención de Matronería en el Entorno Hospitalario II"],
  "Consejería en Salud Sexual y Reproductiva": ["Urgencias en Obstetricia, Ginecología y Neonatología"],

  // CUARTO AÑO - SEMESTRE 7
  "Misión y Servicio": ["Ética y Vida Profesional"],
  "Complementario III": ["Complementario IV"],
  "Metodología de la Investigación": ["Trabajo Final de Carrera"],
  "Medicina Legal y Bioética en Salud Sexual y Reproductiva": ["Innovación y Emprendimiento en Matronería"],
  "Epidemiología para la Gestión en Salud Sexual y Reproductiva": ["Innovación y Emprendimiento en Matronería", "Gestión en Salud Sexual y Reproductiva"],
  "Inmunización en Salud Sexual y Reproductiva": [],
  "Urgencias en Obstetricia, Ginecología y Neonatología": [],
  "Integrado en Atención Primaria de Salud II": [],

  // CUARTO AÑO - SEMESTRE 8
  "Ética y Vida Profesional": [],
  "Complementario IV": ["Práctica Profesional I"],
  "Trabajo Final de Carrera": ["Práctica Profesional I"],
  "Innovación y Emprendimiento en Matronería": [],
  "Gestión en Salud Sexual y Reproductiva": [],
  "Atención de Matronería en el Entorno Hospitalario II": ["Práctica Profesional I"],

  // QUINTO AÑO - SEMESTRE 9 y 10
  "Práctica Profesional I": ["Práctica Profesional II"],
  "Práctica Profesional II": ["Examen de Título"],
  "Examen de Título": []
};

const malla = document.getElementById("malla");
const estados = {};

// Crear cada cuadro
Object.keys(ramos).forEach(nombre => {
  estados[nombre] = false;

  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.id = nombre;
  div.onclick = () => aprobar(nombre);
  malla.appendChild(div);
});

// Habilitar iniciales
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

// Aprobar ramo y desbloquear dependientes
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
