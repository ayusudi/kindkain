import data from "@/data/products.json"
let searchBySlug = (input) => {
  let locale
  let output = data.filter(el => {
    if (el.slug_id === input) {
      locale = 'id'
      return el
    }
    else if (el.slug_en === input) {
      locale = 'en'
      return el
    }
  }).map((result) => {
    let {
      id,
      category,
      photo,
      photos,
      shopee,
      tokopedia,
      lazada,
      tiktok,
      price,
      variants
    } = result
    let product = {
      id,
      category,
      slug: locale === 'id' ? result.slug_id : result.slug_en,
      name: locale === 'id' ? result.nama_product : result.product_name,
      description: locale === 'id' ? result.deskripsi : result.description,
      material_size: locale === 'id' ? result.material_ukuran : result.material_size,
      how_to_use: locale === 'id' ? result.cara_penggunaan : result.how_to_use,
      how_to_wash: locale === 'id' ? result.cara_pembersihan : result.how_to_wash,
      price,
      variants,
      photo,
      photos,
      shopee,
      tokopedia,
      lazada,
      tiktok,
      alternative_slug: locale === 'id' ? result.slug_en : result.slug_id
    }
    return product
  })
  return output[0]
}

export default searchBySlug