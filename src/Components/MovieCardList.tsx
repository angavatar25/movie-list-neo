import { Col, message } from "antd";
import { useEffect, useState } from "react"
import MovieCard from "./MovieCard";
import { useRouter } from "next/navigation";
import { NoticeType } from "antd/es/message/interface";

interface IPagination {
  movieData: Array<IMovieData>;
}

interface IMovieData {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
}

interface IMovieFavouriteData {
  id: number;
  title: string;
  imageUrl: string;
}

const ITEMS_PER_PAGE = 10;

const MovieCardList = (props: IPagination) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<IMovieData[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  const router = useRouter();

  const isFavouriteAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteAvailable);

  const showModal = ({ type, content }: { type: NoticeType, content: string }) => {
    messageApi.open({
      type,
      content,
    })
  }

  const redirectToDetailPage = async (id: number) => {
    router.push(`/movie-detail/${id}`);
  };

  const handleAddToFavourite = (movie: IMovieFavouriteData) => {
    const movieData = {
      id: movie.id,
      title: movie.title,
      imageUrl: movie.imageUrl,
      isFavourite: true,
    }

    const findFavouriteMovie = favouriteParsed.find((index: IMovieFavouriteData) => index.title.includes(movie.title));

    if (findFavouriteMovie) {
      showModal({ type: 'error', content: 'Movie already exist' });
      return;
    };

    if (!isFavouriteAvailable || favouriteParsed.length === 0) {
      const data = [];
      data.push(movieData);
      localStorage.setItem('movieFavourite', JSON.stringify(data));
      showModal({ type: 'success', content: 'Added to favourite' });
      return;
    };

    favouriteParsed.push(movieData);
    localStorage.setItem('movieFavourite', JSON.stringify(favouriteParsed));
    showModal({ type: 'success', content: 'Added to favourite' });
  }

  useEffect(() => {
    const fetchData = () => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const newData = props.movieData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      // function to prevent duplication
      const normalizedData = newData.filter((movie) => !paginatedData.some((existing) => existing.id === movie.id));
      setPaginatedData((prevData) => [...prevData, ...normalizedData]);
    };

    fetchData();
  }, [currentPage, props.movieData]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {contextHolder}
      {paginatedData.length > 0 && paginatedData.map((movie: IMovieData) => (
        <Col
          key={`col-${movie.id}`}
          xs={12} sm={12} md={8} lg={6} xl={6}
        >
          <MovieCard
            key={`index-img-${movie.id}`}
            onClick={() => redirectToDetailPage(movie.id)}
            addToFavourite={() => handleAddToFavourite(movie)}
            id={movie.id}
            name={movie.title}
            image={movie.imageUrl}
          />
        </Col>
      ))}
    </>
  )
}

export default MovieCardList;