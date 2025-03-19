import { CharacterPreview } from "../character-preview";
import { ICharacter, IList } from "../../shared/types";

export const CharacterList: React.FC<IList<ICharacter>> = ({ items = []}) => {
  return items.map(item => (
    <CharacterPreview {...item} />
  ));
};