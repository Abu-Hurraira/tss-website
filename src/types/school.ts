export type Campus = {
  id: string
  name: string
  city: string
  location: string
  description: string
  facilities: string[]
  phone: string
  email: string
  image: string
}

export type NavLink = {
  to: string
  label: string
  end?: boolean
}

export type NavDropdownItem = {
  to: string
  label: string
  description?: string
}

export type TrustStat = {
  id: string
  label: string
  value: number
  suffix: string
}

export type Pillar = {
  id: string
  title: string
  description: string
  image: string
}

export type Leadership = {
  name: string
  title: string
  message: string
  portrait: string
}
