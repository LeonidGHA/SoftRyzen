import { PolicyItemProp } from './PolicyItem.props';

export const PolicyItem = ({ item }: PolicyItemProp) => {
  return (
    <li className="mb-10">
      <h2 className="mb-6 font-semibold">{item.name}</h2>
      <ul className="mb-5">
        {item.list.map((subItem, idx) => (
          <li key={idx} className="mb-5">
            <p className="mb-5">{subItem.subTitle}</p>
            {subItem.subItems && (
              <ul className="mb-5 ml-6">
                {subItem.subItems.map(i => (
                  <li key={i} className="mb-5">
                    {i}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};
