export type ResponseWeatherType = {
  title: string
  features: FeatureType[]
}

export type FeatureType = {
  properties: PropertiesType
  id: string
}

type PropertiesType = {
  areaDesc: string
  event: string
  description: string
  instruction: string
  headline: string
}