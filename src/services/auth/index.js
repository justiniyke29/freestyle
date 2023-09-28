import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "@/utils/api/baseQuery";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({ url: "/public/authentication/signup", method: "POST", data}),
        }),
        login: builder.mutation({
            query: (data) => ({ url: "public/authentication/login", method: "POST", data}),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation} = authApi;