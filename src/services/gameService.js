import games from '../data/games.js'; // ¡Ojo con la extensión .js obligatoria en ESM!
export const getAllGames = () => games;
export const getGameById = (id) => games.find(game => game.id === parseInt(id));