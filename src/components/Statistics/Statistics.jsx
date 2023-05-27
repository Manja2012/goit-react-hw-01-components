import PropTypes from "prop-types";
import style from 'components/Statistics/statistics.module.css'

export const Statistics = ({ stats, title }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
    return (
        <section className={style.container}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.list}>
            {stats.map(stat => (
                <li className={style.item}
                 key={stat.id}
                 style={{ backgroundColor: getRandomHexColor() }}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
                </li>
            ))}
            </ul>
      </section>
            );
          };
          
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
};