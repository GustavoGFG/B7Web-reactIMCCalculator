export const levels = [
  {
    title: 'Magreza',
    color: '#96a3ab',
    icon: 'down',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: '#0ead69',
    icon: 'up',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: '#e2b039',
    icon: 'down',
    imc: [25, 30],
  },
  {
    title: 'Obeso',
    color: '#c3423f',
    icon: 'down',
    imc: [30.1, 99],
  },
];

export const calculateImc = (height, weight) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      levels[i].yourImc = imc;
      console.log(levels);
      return levels[i];
    }
  }
  return null;
};
