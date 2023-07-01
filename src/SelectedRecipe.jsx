import { useContext } from "react"
import { DataContext } from "./Contexts/DataContext"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"

export const SelectedRecipe  = () => {
    const {recipeState} = useContext(DataContext)
    console.log(recipeState)
    const {recipeID} = useParams()
    console.log(recipeID)
    const selectedRecipe = recipeState.filter(recipe => recipe.id == recipeID)
    console.log(selectedRecipe)
    return (
        <>
            <h1>Your Selected Recipe</h1>
            <NavLink to="/"><button>Back To Home</button></NavLink>
            <h2>{selectedRecipe[0].name}</h2>
            <p>Type : {selectedRecipe[0].type}</p>
            <img src={selectedRecipe[0].img} alt="" width={200} height={200}/>
            <h4>Instructons :</h4>
            {selectedRecipe[0].instructions.map(item => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
            <h4>Ingredients : </h4>
            {selectedRecipe[0].ingredients.map(item => {
                return (
                    <i key={item}>{item}, </i>
                )
            })}
        </>
    )
}