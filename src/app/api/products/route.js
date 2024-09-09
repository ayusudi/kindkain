import { NextResponse } from 'next/server';
import dataRaw from '@/data/browse-product.json'

export async function GET(request) {
  let locale = request.headers.get('locale')
  let temp = dataRaw.map(el => {
    if (locale === 'id') {
      return { title: el.nama_product, slug: el.slug_id, price: el.price, photo: el.photo }
    }
    return { title: el.product_name, slug: el.slug_en, price: el.price, photo: el.photo }
  })
  return NextResponse.json(temp);
}