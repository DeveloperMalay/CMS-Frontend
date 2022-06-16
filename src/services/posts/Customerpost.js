import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({

    getCustomerById: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

createPost:builder.mutation({
  quert:(newPost)=>{
    return{
      url:`posts`,
      method:'POST',
      body:newPost,
      headers:{
        'Content-type':'application/json; charset=UTF-8',
      }
    }
  }
})

  }),
});

export const { useGetCustomerByIdQuery,useCreatePostMutation} = postApi;
