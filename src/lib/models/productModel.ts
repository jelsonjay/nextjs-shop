export type Product = {
  _id?: string
  name: string
  slug: string
  image:string
  banner?:string
  price:number
  brand: string
  desc: string
  category:string
  isNew?: string
  rating: string
  numReviews:number
  countInStock:number
  color?:[]
  sizes?: []
}