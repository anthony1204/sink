export default defineAppConfig({
  title: 'Sink (Anthony Edition)',
  description: 'Link shortener for anthony only because why not.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI_mzHas4gtrC5xJraZEoE46qn0jk92Tn4g&s',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
