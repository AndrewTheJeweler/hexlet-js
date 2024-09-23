const capitalize = (word) => {
  if (word === '') {
    return '';
  }
  const [firstChar, ...others] = word;
  return `${firstChar.toUpperCase()}${others.join('')}`;
};

export default capitalize;
