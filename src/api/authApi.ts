// src/hooks/useCreateUser.ts
import { postApi } from '@/api/api';
import { useMutation } from '@tanstack/react-query';

const login = async (data: { email: string; password: string }) => {
  const response = await postApi('/auth/login', data);
  return response;
};

export const useLogin = () => {
  const {mutate, data, isError, error} = useMutation({
    mutationFn: login,
  });

  return {
    mutate,
    data,
    isError,
    error
  };
};

const logout = async (data: { sessionToken: string }) => {
  const response = await postApi('/auth/logout', data);
  return response;
};

export const useLogout = () => {
  const {mutate, data, isError, error} = useMutation({
    mutationFn: logout,
  });

  return {
    mutate,
    data,
    isError,
    error
  };
};