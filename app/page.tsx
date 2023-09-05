import HompageCarousel from '@/app/components/HompageCarousel';
import Goal from './components/Goal';
import MoreHome from './components/MoreHome';
import Review from './components/Review';
import { getReview } from './components/serverActions/actions';

export default async function Home() {
  // Fetched the review from a server action function
  const reviews = await getReview();
  return (
    <main className="w-full h-full">
      <HompageCarousel />
      <MoreHome />
      <Goal />
      <Review reviews={reviews} />
      <h1>This is the home page</h1>
    </main>
  );
}
