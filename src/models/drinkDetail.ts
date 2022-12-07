import Drink from './drink'

interface DrinkDetail extends Drink {
  category: string
  tags: string[]
  IBA: string
  glass: string
  instructions: string
  alcoholic: true
  ingredients: string[]
  measure: string[]
}

export default DrinkDetail