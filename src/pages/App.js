import { useCallback, useState } from "react";
import { Container } from "./styles";

import gitLogo from "../assets/logo.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import { api } from "../services/api";
import Footer from "../components/Footer";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleErrorMessage = useCallback((error) => {
    if (error?.response?.status === 404) {
      setError("Repositório não encontrado!");
    }
  }, []);

  const handleSearchRepo = useCallback(async () => {
    if (!currentRepo.trim()) return;

    setIsLoading(true);
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        setError("");
      } else {
        setError("Repositório já adicionado.");
      }
    } catch (error) {
      handleErrorMessage(error);
    } finally {
      setIsLoading(false);
      setCurrentRepo("");
    }
  }, [currentRepo, repos, handleErrorMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        handleSearchRepo();
      }
    },
    [handleSearchRepo]
  );

  const handleRemoveRepo = useCallback((id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  }, []);

  return (
    <Container>
      <img
        src={gitLogo}
        className="logo"
        width={86}
        height={86}
        alt="github logo"
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={error || "Digite o nome do autor / repositório."}
        disabled={isLoading}
        handleSearchRepo={handleSearchRepo}
      />
      {repos.map((repo) => (
        <ItemRepo
          handleRemoveRepo={handleRemoveRepo}
          repo={repo}
          key={repo.id}
          disabled={isLoading}
        />
      ))}
      <Footer />
    </Container>
  );
}

export default App;
