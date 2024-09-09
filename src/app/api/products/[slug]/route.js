// pages/api/products/[id].js
import { NextResponse } from 'next/server';
import data from "@/data/products.json"
export async function GET(request) {
  let { url } = request
  console.log(url, "CSDCSCDS");

  let locale = ''
  let params = url.split("api/products/")
  let input = params[params.length - 1]
  let result = data.find(el => {
    if (el.slug_id === input) {
      locale = 'id'
      return el
    }
    else if (el.slug_en === input) {
      locale = 'en'
      return el
    }
  })

  let {
    id,
    category,
    photos,
    shopee,
    tokopedia,
    lazada
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
    photo: photos[0] || '',
    photos,
    shopee,
    tokopedia,
    lazada,
    alternative_slug: locale === 'id' ? result.slug_en : result.slug_id
  }
  console.log(product.photo, "<<<<");

  return NextResponse.json(product);
}
