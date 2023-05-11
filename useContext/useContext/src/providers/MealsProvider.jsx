/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const MealsContext = createContext();

const todaysMeals = ["Baked Beans","Baked Potatos","Hamburger"];

export const MealsProvider = ({children})=> {
    const [meals, setMeals] = useState(todaysMeals);

    return(
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    )
};

export const useMealsListContext = () => useContext(MealsContext); //consume the context

 //