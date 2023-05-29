import {useEffect, useState} from "react";
import menu from "./data.js";
import Categories from "./Categories.jsx";
import Menu from "./Menu.jsx";
import Title from "./Title.jsx";


// const tempCategories = menu.map((item)=> item.category);
// const tempSet = new Set(tempCategories)
// const tempItems = ["all",...tempSet]
// console.log(tempItems);

//short version

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(allCategories)


const App = () => {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu)
            return;
        }
        const newItems = menu.filter((item) => item.category === category)
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu">
                <Title text='our menu'/>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    );
};
export default App;
