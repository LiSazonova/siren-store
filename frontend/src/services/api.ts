export async function fetchProducts(collectionSlug: string) {
  const res = await fetch(
    `https://siren-store.onrender.com/api/products?filters[collection][slug][$eq]=${collectionSlug}&populate=*`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  return data.data.map((product: any) => {
    const image = product.images?.[0]?.url || '';
    const imageUrl = image.startsWith('http') ? image : `https://siren-store.onrender.com${image}`;

    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      description: product.description,
      image: imageUrl,
    };
  });
}
