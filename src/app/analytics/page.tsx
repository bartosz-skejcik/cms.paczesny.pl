import { Views } from '@/components/analytics/views';
import Event from '@/components/analytics/event';
import { getData, getEvents, getSessions } from '@/lib/analytics';
import BasicChart from '@/components/analytics/basic-chart';

type Props = {}

async function AnalyticsPage({ }: Props) {

  const data = await getData();
  const events = await getEvents();
  const sessions = await getSessions();

  return (
    <main className="mx-auto grid min-h-screen max-w-6xl flex-1 grid-cols-1 place-content-center gap-4 pb-12 text-foreground lg:grid-cols-4 2xl:grid-cols-6 w-full">
      <Views data={sessions} />
      <BasicChart data={data} valueKey="url" title="Pages" span={3} />
      <BasicChart data={sessions} valueKey='referrer' title="Referrers" span={3} />
      <BasicChart data={sessions} valueKey='country' title="Countries" />
      <BasicChart data={sessions} valueKey='os' title="Operating Systems" />
      <BasicChart data={sessions} valueKey='browser' title="Browsers" />
      <Event data={events} />
    </main>
  )
}

export default AnalyticsPage
