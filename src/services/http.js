// src/services/api.js

import axios from "./api";

export const fetchClients = async (userId) => {
  const options = {
    method: "GET",
    url: "/client_users?ano=2022",
    params: { user_id: userId },
  };
  const response = await axios.request(options);
  return response.data.data;
};

export const fetchStatuses = async () => {
  const options = {
    method: "GET",
    url: "/status-types",
  };
  const { data } = await axios.request(options);
  return data.data;
};

export const fetchVendedores = async () => {
  const options = {
    method: "GET",
    url: "/users/vendedores",
  };
  const { data } = await axios.request(options);
  return data.data;
};

export const fetchCidades = async () => {
  const options = {
    method: "GET",
    url: "/cities-all",
  };
  const { data } = await axios.request(options);
  return data;
};

export const postSiligResults = async (data) => {
  const result = await axios.post("/silig-results", data);
  return result.data;
};

export const postLigacoes = async (clienteId) => {
  const data = await axios.post("/ligacoes", {
    cliente_id: clienteId,
  });
  return data;
};
