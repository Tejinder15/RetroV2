import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a service using a base URL and expected endpoints
export const retroApi = createApi({
  reducerPath: "retorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () => `/videos/`,
    }),
    getVideoById: builder.query({
      query: (id) => `/videos/${id}`,
    }),
    userSignup: builder.query({
      query: () => `/user/signup`,
    }),
    loginUser: builder.mutation({
      query: (payload) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json;chartset=UTF-8",
          },
        };
      },
    }),
    signupUser: builder.mutation({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json;chartset=UTF-8",
          },
        };
      },
    }),
    getWatchLater: builder.query({
      query: (token) => {
        return {
          url: "/user/watchlater",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getLikedVideos: builder.query({
      query: (token) => {
        console.log(token);
        return {
          url: "/user/likes",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllVideosQuery,
  useGetVideoByIdQuery,
  useLoginUserMutation,
  useSignupUserMutation,
  useGetWatchLaterQuery,
  useGetLikedVideosQuery,
} = retroApi;
