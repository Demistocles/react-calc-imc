export const levels = [
  { title: 'magreza', color: '#96A3AB', icon: 'down', imc: [0,18.5], yourImc: 0 },
  { title: 'normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9], yourImc: 0 },
  { title: 'sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30], yourImc: 0 },
  { title: 'obesdade', color: '#C3423F', icon: 'down', imc: [30.1, 99], yourImc: 0 }
];

export const calculateImc = (height, weight) => {
  const imc = weight / (height * height);

  for(let i in levels) {
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelcopy = {...levels[i]}

      levelcopy.yourImc = imc.toFixed(2);
      return levelcopy;
    }
  }

  return null;
}