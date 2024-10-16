import dataRaw from '@/data/products.json'

export default function getBestSelling(cookies) {
  let { locale } = cookies
  let temp = dataRaw.filter(el => el.bestselling).map(el => {
    if (locale === 'id') {
      return { id: el.id, title: el.nama_product, slug: el.slug_id, price: el.price, photo: el.photo, category: el.category, startPrice: el.startPrice, bestselling: el.bestselling }
    }
    return { id: el.id, title: el.product_name, slug: el.slug_en, price: el.price, photo: el.photo, category: el.category, startPrice: el.startPrice, bestselling: el.bestselling }
  })
  return temp
}