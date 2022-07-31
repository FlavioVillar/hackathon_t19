import { useContext, useEffect } from 'react';
import { MyContext, MyDispatchContext } from '../contexts/Context';
import WineCard from './WineCard';
import { mapWines } from '../helpers/helpersWines';
import { getAllWines } from '../services/shopApi';
import './styles/WineCard.css';
export default function WineBanner() {
  const { Wines } = useContext(MyContext);
  const { setWines } = useContext(MyDispatchContext);

  const getWines = async () => {
    const { items } = await getAllWines();
    setWines(items);
  };
  useEffect(() => {
    getWines();
  }, []);

  return (
    <section className="container-section-wine-card">{mapWines(Wines, WineCard, 5, true)}</section>
  );
}
