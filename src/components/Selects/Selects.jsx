const Selects = () => {
  return (
    <div>
      <select name="statusTask">
        <option>status</option>
        <option value="ready">pronto</option>
        <option value="progress">em andamento</option>
        <option value="pending">pendente</option>
      </select>
    </div>
  );
};

export default Selects;
