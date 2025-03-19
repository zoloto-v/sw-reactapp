import { http } from "../../../shared/api";

class CharacterService {
  getCharacterList = async () => {
    return http.get('/people/');
  };
  getCharacterById = async (id: string) => {
    return http.get(`/people/${id}`);
  };
};

export const characterService = new CharacterService();