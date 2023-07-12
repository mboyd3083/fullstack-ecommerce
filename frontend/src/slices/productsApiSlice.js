import { PRODUCTS_URL, UPLOAD_URL, CATEGORY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber, pageSize, category }) => ({
        url: PRODUCTS_URL,
        params: {
          pageNumber,
          pageSize,
          keyword,
          category,
        },
      }),
      providesTags: ["Products"],
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Products"],
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: "DELETE",
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
    getLatestProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/latest`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCategories: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCategoryById: builder.query({
      query: (categoryId) => ({
        url: `${CATEGORY_URL}/${categoryId}`,
      }),
      keepUnusedDataFor: 5,
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetLatestProductsQuery,
  
} = productsApiSlice;
