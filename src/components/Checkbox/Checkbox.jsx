const Checkbox = () => {
  return (
    <div>
      Ordenar por:
      <input type="checkbox" name="orderTask" id="orderTask" />
      <label htmlFor="orderTask">tarefas</label>
      <input type="checkbox" name="orderDate" id="orderDate" />
      <label htmlFor="orderDate">data</label>
      <input type="checkbox" name="orderStatus" id="orderStatus" />
      <label htmlFor="orderStatus">status</label>
    </div>
  );
};

export default Checkbox;
