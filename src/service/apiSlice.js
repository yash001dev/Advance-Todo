import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://631f49f622cefb1edc48319e.mockapi.io/api/register",
  }),
  tagTypes: ["UserPost"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["UserPost"],
    }),
    addNewUser: builder.mutation({
      query: (payload) => ({
        url: "/users",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["UserPost"],
    }),
  }),
});
export const { useGetUsersQuery, useAddNewUserMutation } = apiSlice;
