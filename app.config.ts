export default defineAppConfig({
  baseURL: 'https://gateway.marvel.com',
  apikey: import.meta.env.VITE_PUBLIC_KEY,
})