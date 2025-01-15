const API_BASE_URL = "https://siren-store.onrender.com";

export async function fetchProducts(collectionSlug: string) {
  const res = await fetch(`${API_BASE_URL}/api/products/${collectionSlug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  return data.map((product: any) => ({
    id: product._id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    description: product.description,
    image: product.image,
  }));
}
