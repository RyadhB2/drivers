import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import {Truck} from '../models/Trucks';

const BASE_URL = '';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  timeout: 90 * 1000,
  prepareHeaders: async headers => {
    //   const accessToken = await retrieveData('accessToken');
    //   const deviceId = await getUniqueId();
    //   headers.set('Authorization', `Bearer ${accessToken}`);
    //   headers.set('device-id', deviceId);
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  // tagTypes: [''],
  endpoints: builder => ({
    // createTechnicalControl: builder.mutation<TechnicalControl, any>({
    //   query: body => ({ url: '/controls', method: 'POST', body }),
    //   invalidatesTags: ['TECHNICAL_CONTROLS'],
    // }),
    // getAllTechnicalControls: builder.query<TechnicalControl[], void>({
    //   query: () => ({
    //     url: '/controls/all',
    //     method: 'GET',
    //   }),
    //   providesTags: ['TECHNICAL_CONTROLS', 'TRUCKS'],
    //   keepUnusedDataFor: 0,
    // }),
  }),
});

export const {} = api;
