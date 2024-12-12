import {useCallback, useState} from "react";
import {Container} from "./styles";

import gitLogo from "../assets/logo.png";

import Input from "../components/Input";
import Footer from "../components/Footer";
import ItemRepo from "../components/ItemRepo";

import {api} from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleErrorMessage = useCallback((error) => {
    if (error?.response?.status === 404) {
      setError("Repositório não encontrado!");
    } else {
      setError("Um erro inesperado ocorreu. Por favor, tente novamente.");
      throw error;
    }
  }, []);

  const fetchRepo = useCallback(async (repoPath) => {
    try {
      const response = await api.get(`repos/${repoPath}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  const fetchUserRepos = useCallback(async (username) => {
    try {
      const response = await api.get(`users/${username}/repos`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }, []);

  const isRepoPathValid = (input) => {
    const regex = /^[^/]+\/[^/]+$/;
    return regex.test(input);
  };

  const repoExists = useCallback((repos, repoId) => {
    return repos.some((repo) => repo.id === repoId);
  }, []);

  const handleSearchRepo = useCallback(async () => {
    if (!currentRepo.trim()) return;

    setIsLoading(true);
    try {
      if (isRepoPathValid(currentRepo)) {
        const repoData = await fetchRepo(currentRepo);
        const isExist = repoExists(repos, repoData.id);

        if (!isExist) {
          setRepos((prev) => [...prev, repoData]);
        } else {
          setError("Repositório já adicionado.");
        }
      } else {
        const userReposData = await fetchUserRepos(currentRepo);
        const newRepos = userReposData.filter(
          (repo) => !repoExists(repos, repo.id)
        );
        
        if (newRepos.length > 0) {
          setRepos((prev) => [...prev, ...newRepos]);
        } else {
          setError("Todos os repositórios já foram adicionados.");
        }
      }
      setError("");
    } catch (error) {
      handleErrorMessage(error);
    } finally {
      setIsLoading(false);
      setCurrentRepo("");
    }
  }, [
    currentRepo,
    repos,
    fetchRepo,
    repoExists,
    fetchUserRepos,
    handleErrorMessage,
  ]);

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
      <p>Insira os dados para realizar a busca:</p>
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={error || "Autor ou autor / repositório"}
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
