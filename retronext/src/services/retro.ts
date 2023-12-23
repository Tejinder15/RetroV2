import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a service using a base URL and expected endpoints
export const retroApi = createApi({
  reducerPath: "retorApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  tagTypes: ["watchLater", "video", "likes"],
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: (category) => `/videos?category=${category}`,
    }),
    getVideoById: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: (result, error, id) => [{ type: "video", id }],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                (id: string) => ({ type: "watchLater", id } as const)
              ),
              { type: "watchLater", id: "LIST" },
            ]
          : [{ type: "watchLater", id: "LIST" }],
    }),
    addToWatchLater: builder.mutation({
      query: (payload) => {
        return {
          url: "/user/watchlater",
          method: "POST",
          body: payload.vid,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        };
      },
      invalidatesTags: [{ type: "watchLater", id: "LIST" }],
    }),
    removeFromWatchLater: builder.mutation({
      query: (payload) => {
        return {
          url: "/user/watchlater",
          method: "DELETE",
          body: payload.vid,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "watchLater", id }],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map((id: string) => ({ type: "likes", id } as const)),
              { type: "likes", id: "like" },
            ]
          : [{ type: "likes", id: "like" }],
    }),
    setVideoComment: builder.mutation({
      query: (payload) => {
        return {
          url: `/user/comment/${payload.id}`,
          method: "POST",
          body: payload.commentData,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        };
      },
      invalidatesTags: [{ type: "video" }],
    }),
    likeVideo: builder.mutation({
      query: (payload) => {
        return {
          url: "/user/likes",
          method: "POST",
          body: payload.vid,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        };
      },
      invalidatesTags: [{ type: "video" }],
    }),
    removeLikedVideo: builder.mutation({
      query: (payload) => {
        return {
          url: `/user/likes/${payload.vid}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        };
      },
      invalidatesTags: [{ type: "video" }, { type: "likes" }],
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
  useAddToWatchLaterMutation,
  useRemoveFromWatchLaterMutation,
  useGetLikedVideosQuery,
  useSetVideoCommentMutation,
  useLikeVideoMutation,
  useRemoveLikedVideoMutation,
} = retroApi;
