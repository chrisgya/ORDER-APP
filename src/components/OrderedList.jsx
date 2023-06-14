
function OrderedList({orderedList}) {
  return (
      <table>
        <caption>Ordered Items</caption>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderedList.map((data) => (
            <tr key={`${data.item}-${data.option.size}`}>
              <td>{data.item}</td>
              <td>{data.option.price}</td>
              <td>{data.option.price}</td>
              <td>{data.option.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}

export default OrderedList
