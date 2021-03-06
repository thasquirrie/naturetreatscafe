import { createContext, useReducer } from 'react';
import axios from 'axios';
import githubReducer from './GithubReducer';
import products from '../../assets/data/products';

console.log({ products });

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    products,
    users: [],
    user: {},
    repos: [],
    orgs: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const config = {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      'User-Agent': 'request',
    },
  };

  const fetchProducts = () => {

  };

  const fetchData = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    console.log(params);
    try {
      const {
        data: { items },
      } = await axios({
        method: 'GET',
        url: `https://api.github.com/search/users?${params}`,
        config,
      });
      console.log({ items });
      dispatch({
        type: 'GET_USERS',
        payload: items,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const setLoading = () => {
    return dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearData = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  const fetchUser = async (login) => {
    setLoading(true);

    try {
      const data = await axios({
        method: 'GET',
        url: `https://api.github.com/users/${login}`,
        config,
      });

      if (data.status === 404) {
        window.location('/not-found');
      } else {
        dispatch({
          type: 'GET_USER',
          payload: data.data,
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchRepos = async (login) => {
    setLoading(true);

    try {
      const data = await axios({
        method: 'GET',
        url: `https://api.github.com/users/${login}/repos`,
        config,
      });

      dispatch({
        type: 'GET_USER_REPOS',
        payload: data.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchOrgs = async (login) => {
    setLoading(true);

    try {
      const data = await axios({
        method: 'GET',
        url: `https://api.github.com/users/${login}/orgs`,
        config,
      });

      if (data.status === 404) {
        window.location('/not-found');
      }

      dispatch({
        type: 'GET_USER_ORGS',
        payload: data.data,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        repos: state.repos,
        orgs: state.orgs,
        loading: state.loading,
        fetchData,
        clearData,
        fetchUser,
        fetchRepos,
        fetchOrgs,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
