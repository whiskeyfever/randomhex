const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  
  const color = generateRandomColor();
  console.log(`Сгенерированный случайный цвет: ${color}`);
  