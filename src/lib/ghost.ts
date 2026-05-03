import GhostContentAPI from '@tryghost/content-api';

// Inicialización de la API de Ghost
// Simulamos las variables de entorno para el ejemplo, pero en producción deben venir de .env
const api = new GhostContentAPI({
  url: process.env.GHOST_URL || 'https://mincoex-ghost.press-cloud.com',
  key: process.env.GHOST_CONTENT_KEY || '037380524fd862dec48e33c079',
  version: 'v5.0'
});

export async function getPosts(limit = 6) {
  try {
    const posts = await api.posts.browse({
      limit: limit,
      include: ['tags', 'authors'],
      fields: ['id', 'title', 'slug', 'custom_excerpt', 'excerpt', 'feature_image', 'published_at']
    });
    return posts;
  } catch (err) {
    console.error('Error al obtener noticias de Ghost:', err);
    // Retornamos un arreglo vacío en caso de error para no romper la UI
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const post = await api.posts.read({
      slug: slug
    }, {
      include: ['tags', 'authors'],
      formats: ['html']
    });
    return post;
  } catch (err) {
    console.error(`Error al obtener la noticia con slug ${slug}:`, err);
    return null;
  }
}
