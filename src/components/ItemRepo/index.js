import { ItemContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import LanguagesBar from "../LanguagesBar";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <p className="description">{repo.description}</p>
      <LanguagesBar repo={repo} />
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFileLines} className="icon" /> Ver repositório
      </a>
      <button onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrashCan} className="icon" /> Remover
      </button>
    </ItemContainer>
  );
}

export default ItemRepo;
