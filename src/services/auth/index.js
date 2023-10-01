import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "../../utils/api/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/public/authentication/signup",
        method: "post",
        data,
      }),
    }),
    getUser: builder.query({
      query: () => ({ url: "/user", method: "get" }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "public/authentication/login",
        method: "post",
        data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
