export const TEMPLATE = (todo) =>
  ` <li>
    <div>
      <input class="toggle" type="checkbox" />
      <label class="label">${todo}</label>
      <button class="destroy"></button>
    </div>
  </li>
`;