function List(props) {
    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    const category = props.category;
    const itemList = props.items;
    /*
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}]; */

    // fruits.sort(); // sorts the fruits alphabetically
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERICAL ORDER
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERICAL ORDER

    // const listItems = fruits.map(fruit => <li>{fruit}</li>);

    // filter out the low calorie fruits
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // filter out the high calorie fruits
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // need to assign a key id
    
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                          </li>);
    
   /*
   // displays the low calorie fruits
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                        {lowCalFruit.name}: &nbsp;
                                                        <b>{lowCalFruit.calories}</b>
                                                      </li>);
    */
    // displays the high calorie fruits
    /*
    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                        {highCalFruit.name}: &nbsp;
                                                        <b>{highCalFruit.calories}</b>
                                                      </li>);
    */
    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
           </>); // <ol> for numbered
}

List.propTypes = {
    category: PropTypes.string,
    items: Proptypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropType.number}))
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List