
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h1 className="animate__fadeInDown">{category}</h1>

            {loading && <p className="animate__flash">Loading...</p>}

            <div className="card-grid animate__animated animate__fadeInLeft">

                {
                    images.map(elemento => (
                        <GifGridItem key={elemento.id} {...elemento} />
                    ))
                }
            </div>
        </>
    )
}
