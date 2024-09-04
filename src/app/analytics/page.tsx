import Browser from '@/components/analytics/browser';
import Countries from '@/components/analytics/countries';
import OperatingSystem from '@/components/analytics/operating-system';
import Pages from '@/components/analytics/pages';
import Referrers from '@/components/analytics/referrers';
import { Views } from '@/components/analytics/views';
import Event from '@/components/analytics/event';
import { getData, getEvents, getSessions } from '@/lib/analytics';

type Props = {}

async function AnalyticsPage({ }: Props) {

  const data = await getData();
  const events = await getEvents();
  const sessions = await getSessions();

  return (
    <main className="mx-auto grid min-h-screen w-full max-w-6xl flex-1 grid-cols-1 place-content-center gap-4 pb-12 text-foreground lg:grid-cols-4 2xl:grid-cols-6">
      <Views data={sessions} />
      <Pages data={data} />
      <Referrers data={sessions} />
      <Countries data={sessions} />
      <OperatingSystem data={sessions} />
      <Browser data={sessions} />
      <Event data={events} />
    </main>
  )
}

export default AnalyticsPage
