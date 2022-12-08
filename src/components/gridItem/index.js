import styles from './gridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

export const GridItem = (props) => {
  return (
      <div className={styles.main} style={{backgroundColor: props.item.color}}>
        <div className={styles.gridIcon}>
          <img src={props.item.icon === 'up' ? upImage : downImage } alt='' width='30' />
        </div>
        <div className={styles.gridTitle}>{props.item.title}</div>
        {props.item.yourImc > 0 &&
          <div className={styles.gridImc}>seu IMC é de {props.item.yourImc} Kg/m²</div>
        }
        <div className={styles.gridInfo}>
          <>
            O IMC está entre <strong>{props.item.imc[0]}</strong> e <strong>{props.item.imc[1]}</strong>
          </>
        </div>
      </div>
  );
};
