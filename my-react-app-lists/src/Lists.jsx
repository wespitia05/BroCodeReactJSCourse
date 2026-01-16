function List() {
    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

    // fruits.sort(); // sorts the fruits alphabetically
    fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL ORDER
    fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERICAL ORDER

    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // need to assign a key id
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>
                                          </li>);

    return(<ul>{listItems}</ul>); // <ol> for numbered
}

export default List