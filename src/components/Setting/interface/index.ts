export interface iLabel {
  label: string
  value: string
  type?: string
}

export interface iOption {
  searchEngine: Array<iLabel>
  searchAssociate: Array<iLabel>
}

export interface iValues {
  searchEngine: string
  searchAssociate: string
}
