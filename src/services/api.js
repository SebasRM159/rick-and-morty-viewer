export const fetchCharacters = async (name) => {
  const q = name ? `?name=${name}` : '' ;
  const res= await fetch("https://rickandmortyapi.com/api/character" +q);
  const data = await res.json();
  return data.results;
};
