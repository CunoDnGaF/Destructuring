export default function specialAbility(obj) {
  let arr = [];
  const { special } = obj;

  if (typeof obj != 'object') { 
    throw new Error('Объект не передан')
  }
  
  for (let i = 0; i < special.length; i++) {
    if (!special[i].description) {
      special[i].description = 'Описание недоступно';
    }
    arr.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description
    });
  }

  return arr;
}