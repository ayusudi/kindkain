import dataRaw from '@/data/products.json'

export default function getProducts(cookies) {
  let { locale, categories } = cookies
  let temp = dataRaw.map(el => {
    if (locale === 'id') {
      return { id: el.id, title: el.nama_product, slug: el.slug_id, price: el.price, photo: el.photo, category: el.category, startPrice: el.startPrice }
    }
    return { id: el.id, title: el.product_name, slug: el.slug_en, price: el.price, photo: el.photo, category: el.category, startPrice: el.startPrice }
  })
  if (categories?.length) {
    temp = temp.filter(el => {
      if (categories.split(',').includes(el.category)) {
        return el
      }
    })
  }
  return temp
}