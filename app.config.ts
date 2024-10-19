export default defineAppConfig({
  title: 'AShorten',
  description: 'omg link shortener',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI_mzHas4gtrC5xJraZEoE46qn0jk92Tn4g&s',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
