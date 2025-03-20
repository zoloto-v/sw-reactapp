import { http } from "../../../shared/api";

class CharacterService {
  getCharacterList = async (page = 1) => {
    return http.get(`/api/people/?page=${page}`);
  };
  getCharacterById = async (path: string) => {
    return http.get(`${path}`);
  };
};

export const characterService = new CharacterService();