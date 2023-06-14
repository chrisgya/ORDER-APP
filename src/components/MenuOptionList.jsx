
function MenuOptionList({menuOptions, onOrder}) {
  return (
   <table>
        <caption>Menu Options</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {menuOptions.map((menuItem) => (
            <tr key={menuItem.item}>
              <th scope="row">{menuItem.item}</th>
              <td>
                <div>
                  <table>
                    <caption>{menuItem.item} Options</caption>
                    <thead>
                      <tr>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItem.options.map((option) => (
                        <tr key={option.size}>
                          <td>{option.size}</td>
                          <td>{option.price}</td>
                          <td>
                            <button
                              onClick={() => onOrder(menuItem.item, option)}
                              aria-label={`Add ${option.size} ${menuItem.item} to Order`}
                            >
                              Order
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default MenuOptionList
