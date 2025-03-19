import { http } from "../../../shared/api";

class CharacterService {
  getCharacterList = async (page = 1) => {
    return http.get(`/people/?page=${page}`);
  };
  getCharacterById = async (id: string) => {
    return http.get(`/people/${id}`);
  };
};

export const characterService = new CharacterService();