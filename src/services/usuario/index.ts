import api from "../api";

export interface IUsuario {
  id: string;
  nome: string;
  email: string;
}

const getUsuarios = async (): Promise<IUsuario[]> => {
  try {
    const response = await api.get<IUsuario[]>(`/usuario`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const postUsuario = async (payload: Omit<IUsuario, "id">): Promise<number> => {
  try {
    const response = await api.post<number>(`/usuario`, payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UsuarioService = {
  getUsuarios,
  postUsuario,
};
